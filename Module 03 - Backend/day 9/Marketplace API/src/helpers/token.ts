/** @format */

import { jwt_secret, refresh_jwt_secret } from "../config";
import { sign } from "jsonwebtoken";
import { UserLogin } from "../interfaces/user.interface";
import { getUserByEmail } from "./user.prisma";
import { ErrorHandler } from "./response.handler";

export const generateAuthToken = async (user?: UserLogin, email?: string) => {
  const existingUser = user || ((await getUserByEmail(email!)) as UserLogin);
  if (!existingUser) throw new ErrorHandler("wrong email", 401);
  delete existingUser.password;

  const access_token = sign(existingUser, jwt_secret, {
    expiresIn: "30m",
  });
  const refresh_token = sign(
    { email: existingUser.email },
    refresh_jwt_secret,
    {
      expiresIn: "1h",
    }
  );
  return { access_token, refresh_token };
};
