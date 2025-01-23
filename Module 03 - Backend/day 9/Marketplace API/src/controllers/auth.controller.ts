/** @format */

import { NextFunction, Request, Response } from "express";
import { ErrorHandler, responseHandler } from "../helpers/response.handler";
import authService from "../services/auth.service";

class AuthController {
  async signIn(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await authService.signIn(req);
      responseHandler(res, "login success", data);
    } catch (error) {
      next(error);
    }
  }
  async signUp(req: Request, res: Response, next: NextFunction) {
    try {
      await authService.signUp(req);
      responseHandler(res, "register success");
    } catch (error) {
      next(error);
    }
  }

  async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await authService.updateUser(req);
      responseHandler(res, "register success", data);
    } catch (error) {
      next(error);
    }
  }
}

export default new AuthController();
