/** @format */

import { jwt_secret, refresh_jwt_secret } from "../config";
import { sign } from "jsonwebtoken";
import { UserLogin } from "../interfaces/user.interface";
import { getUserByEmail } from "./user.prisma";
import { ErrorHandler } from "./response.handler";

export const generateAuthToken = async (user?: UserLogin, email?: string) => {
  const existUser = user || ((await getUserByEmail(email!)) as UserLogin);
  if (!existUser) throw new ErrorHandler("wrong email", 401);
  delete existUser.password;

  const access_token = sign(existUser, jwt_secret, {
    expiresIn: "20m",
  });
  const refresh_token = sign({ email: existUser.email }, refresh_jwt_secret, {
    expiresIn: "1h",
  });
  return { access_token, refresh_token };
};
