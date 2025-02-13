/** @format */

import { Prisma } from "@prisma/client";
import { Request } from "express";
import { slugGenerator } from "../helpers/slug.generator";
import { prisma } from "../config";
import { pagination } from "../helpers/pagination";

class ProductService {
  async create(req: Request) {
    const { product_name, img_src, price } = req.body;
    const data: Prisma.ProductCreateInput = {
      product_name,
      img_src,
      price,
      slug: slugGenerator(product_name),
    };

    await prisma.product.create({
      data,
    });
  }
  async update(req: Request) {
    const id = Number(req.params.id);
    const { product_name, img_src, price } = req.body;
    const data: Prisma.ProductUpdateInput = {};
    if (product_name) data.product_name = product_name;
    if (img_src) data.img_src = img_src;
    if (price) data.price = price;

    await prisma.product.update({
      data,
      where: { id, isDeleted: null },
    });
  }
  async delete(req: Request) {
    const id = Number(req.params.id);
    await prisma.product.update({
      data: {
        isDeleted: new Date(),
      },
      where: {
        id,
      },
    });
  }
  async getBySlug(req: Request) {
    const { slug } = req.params;
    return await prisma.product.findUnique({
      where: {
        slug,
        isDeleted: null,
      },
    });
  }
  async getList(req: Request) {
    const { page, product_name } = req.query;
    return await prisma.product.findMany({
      where: {
        product_name: {
          contains: String(product_name || ""),
        },
        isDeleted: null,
      },
      ...pagination(Number(page), 16),
    });
  }
}

export default new ProductService();
