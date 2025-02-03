/** @format */

import { prisma } from "../config";

export const getUserByEmail = (email: string) =>
  prisma.user.findUnique({
    select: {
      id: true,
      password: true,
      email: true,
      first_name: true,
      last_name: true,
      img_src: true,
      role: true,
    },
    where: {
      email,
    },
  });
