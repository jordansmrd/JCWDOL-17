/** @format */

import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { jwt_secret, refresh_jwt_secret } from "../config";
import { ErrorHandler } from "../helpers/response.handler";
import { UserLogin } from "../interfaces/user.interface";
import yup from "yup";
import { getUserByEmail } from "../helpers/user.prisma";
export const verifyUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;
    const token = String(authorization || "").split("Bearer ")[1];
    const verfiedUser = verify(token, jwt_secret);
    if (!verfiedUser) throw new ErrorHandler("unauthorized", 401);
    req.user = verfiedUser as UserLogin;

    next();
  } catch (error) {
    next(error);
  }
};

export const verifyRefreshToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = req.headers;
    const token = String(authorization || "").split("Bearer ")[1];
    const verfiedUser = verify(token, refresh_jwt_secret);
    req.user = verfiedUser as UserLogin; // {}
    next();
  } catch (error) {
    next(error);
  }
};

export const registerValidation =
  (schema: yup.ObjectSchema<any>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate(req.body);
      if (await getUserByEmail(req.body.email))
        throw new ErrorHandler(
          "You may already own an existing account with that email address"
        );
      return next();
    } catch (err) {
      next(err);
    }
  };
