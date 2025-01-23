/** @format */

import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { jwt_secret } from "../config";
import { ErrorHandler } from "../helpers/response.handler";
import { UserLogin } from "../interfaces/user.interface";

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
