/** @format */

import { NextFunction, Request, Response } from "express";
import { ErrorHandler, responseHandler } from "../helpers/response.handler";
import cartService from "../services/cart.service";

class CartController {
  async addToCart(req: Request, res: Response, next: NextFunction) {
    try {
      await cartService.addToCart(req);
      responseHandler(
        res,
        "new product has been added to cart",
        undefined,
        201
      );
    } catch (error) {
      next(error);
    }
  }

  async getUserCart(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await cartService.getUserCart(req);
      responseHandler(res, "fetching cart", data);
    } catch (error) {
      next(error);
    }
  }

  async deleteCart(req: Request, res: Response, next: NextFunction) {
    try {
      await cartService.deleteCart(req);
      responseHandler(res, "product has been deleted from your cart");
    } catch (error) {
      next(error);
    }
  }
}

export default new CartController();
