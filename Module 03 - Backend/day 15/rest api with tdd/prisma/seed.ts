/** @format */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const data = [
  {
    firstName: "john",
    lastName: "doe",
    email: "john.doe@mail.com",
  },
  {
    firstName: "david",
    lastName: "joe",
    email: "david.joe@mail.com",
  },
];
const main = async () => {
  await prisma.$connect();
  await prisma.user.createMany({
    data,
  });
};

main()
  .catch((err) => {
    console.log(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
