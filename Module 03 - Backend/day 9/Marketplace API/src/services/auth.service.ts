/** @format */

import { Request } from "express";
import { jwt_secret, prisma } from "../config";
import { Prisma } from "@prisma/client";
import { hashedPassword } from "../helpers/bcrypt";
import { compare } from "bcrypt";
import { getUserByEmail } from "../helpers/user.prisma";
import { ErrorHandler } from "../helpers/response.handler";
import { UserLogin } from "../interfaces/user.interface";
import { sign } from "jsonwebtoken";
import { generateAuthToken } from "../helpers/token";
import { cloudinaryUpload } from "../helpers/cloudinary";

class AuthService {
  async signIn(req: Request) {
    const { email, password } = req.body;

    const user = (await getUserByEmail(email)) as UserLogin;
    if (!user)
      throw new ErrorHandler(
        "The email that you've entered is incorrect.",
        401
      );
    else if (!(await compare(password, user.password as string)))
      throw new ErrorHandler(
        "The password that you've entered is incorrect.",
        401
      );

    return await generateAuthToken(user); // access_token, refresh_token
  }

  async signUp(req: Request) {
    const { email, password, first_name, last_name } = req.body;

    await prisma.user.create({
      data: {
        email,
        password: await hashedPassword(password),
        first_name,
        last_name,
      },
    });
  }

  async updateUser(req: Request) {
    const { first_name, last_name } = req.body;
    const id = Number(req.user?.id);
    const data: Prisma.UserUpdateInput = {};
    if (first_name) data.first_name = first_name;
    if (last_name) data.last_name = last_name;
    await prisma.user.update({
      data,
      where: {
        id,
      },
    });
    return await this.refreshToken(req);
  }
  async uploadAvatar(req: Request) {
    const id = Number(req.user?.id);
    const { file } = req;
    if (!file) throw new Error("No File Uploaded");
    const { secure_url } = await cloudinaryUpload(file);
    await prisma.user.update({
      data: {
        img_src: secure_url,
      },
      where: {
        id,
      },
    });
  }
  async refreshToken(req: Request) {
    if (!req.user?.email) throw new ErrorHandler("invalid token");

    return await generateAuthToken(undefined, req.user?.email);
  }
}

export default new AuthService();
