/** @format */
import { Prisma } from "@prisma/client";
import { Request } from "express";
import { slugGenerator } from "../helpers/slug.generator";
import { prisma, snap } from "../config";
import { pagination } from "../helpers/pagination";
import { ErrorHandler } from "../helpers/response.handler";

class CartService {
  async addToCart(req: Request) {
    const { product_id } = req.body;

    const checkIfProductExist = await prisma.cart.findFirst({
      where: {
        userId: Number(req.user?.id),
        productId: Number(product_id),
      },
    });
    if (checkIfProductExist)
      throw new ErrorHandler("This product is already in your cart");
    const data: Prisma.CartCreateInput = {
      Product: {
        connect: {
          id: product_id,
        },
      },
      User: {
        connect: {
          id: req.user?.id,
        },
      },
    };

    await prisma.cart.create({
      data,
    });
  }

  async getUserCart(req: Request) {
    return await prisma.cart.findMany({
      select: {
        Product: {
          select: {
            id: true,
            img_src: true,
            product_name: true,
            price: true,
            slug: true,
          },
        },
      },
      where: {
        userId: Number(req.user?.id),
      },
    });
  }

  async deleteCart(req: Request) {
    return await prisma.cart.delete({
      where: {
        productId_userId: {
          productId: Number(req.params.productId),
          userId: Number(req.user?.id),
        },
      },
    });
  }

  async checkout(req: Request) {
    return await prisma.$transaction(async (prisma) => {
      const carts = await prisma.cart.findMany({
        include: {
          Product: true,
        },
        where: {
          userId: req.user?.id,
        },
      }); //check existing cart

      if (carts.length == 0) throw new ErrorHandler("Your Cart is Empty");

      //create data for transaction & transaction details
      const data: Prisma.TransactionCreateInput = {
        noInvoice: "INV" + new Date().valueOf(),
        User: {
          connect: {
            id: req.user?.id,
          },
        },
        TransactionDetail: {
          createMany: {
            data: carts.map(({ productId, Product }) => ({
              productId,
              price: Product.price,
            })),
          },
        },
      };

      const { id } = await prisma.transaction.create({
        data,
      }); //create transaction & transaction details

      const transactions = await prisma.transaction.findUnique({
        include: {
          TransactionDetail: true,
        },
        where: {
          id,
        },
      });

      //create parameter for midtrans transaction
      let parameter = {
        transaction_details: {
          order_id: transactions?.noInvoice,
          gross_amount: transactions?.TransactionDetail.reduce(
            (sum, { price }) => sum + Number(price),
            0
          ),
        },
      };

      const { token, redirect_url } = await snap.createTransaction(parameter); // create transaction in midtrans
      console.log(redirect_url);

      await prisma.cart.deleteMany({
        where: {
          userId: req.user?.id,
        },
      });

      return token;
    });
  }
}
export default new CartService();
