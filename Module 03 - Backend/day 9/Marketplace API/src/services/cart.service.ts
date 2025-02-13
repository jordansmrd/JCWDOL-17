/** @format */
import { Prisma } from "@prisma/client";
import { Request } from "express";
import { slugGenerator } from "../helpers/slug.generator";
import { prisma } from "../config";
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
}
export default new CartService();
