/** @format */

import { prisma } from "../config";

export const getUserByEmail = (email: string) =>
  prisma.user.findUnique({
    select: {
      id: true,
      password: true,
      first_name: true,
      last_name: true,
      img_src: true,
    },
    where: {
      email,
    },
  });
