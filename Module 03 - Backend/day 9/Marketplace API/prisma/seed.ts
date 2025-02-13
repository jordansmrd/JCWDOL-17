/** @format */

import { PrismaClient } from "@prisma/client";
import { products } from "./db.json";
const main = async () => {
  const prisma = new PrismaClient();
  try {
    prisma.$connect();
    await prisma.product.deleteMany({ where: {} });
    await prisma.product.createMany({
      data: products,
    });
  } catch (error) {
  } finally {
    prisma.$disconnect();
  }
};

main();
