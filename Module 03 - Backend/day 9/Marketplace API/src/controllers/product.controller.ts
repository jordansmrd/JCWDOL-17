/** @format */

import { NextFunction, Request, Response } from "express";
import { ErrorHandler, responseHandler } from "../helpers/response.handler";
import productService from "../services/product.service";

class ProductController {
  async createProduct(req: Request, res: Response, next: NextFunction) {
    try {
      await productService.create(req);
      responseHandler(res, "new product has been created", undefined, 201);
    } catch (error) {
      next(error);
    }
  }
  async updateProduct(req: Request, res: Response, next: NextFunction) {
    try {
      await productService.update(req);
      responseHandler(res, "new product has been updated");
    } catch (error) {
      next(error);
    }
  }

  async deleteProduct(req: Request, res: Response, next: NextFunction) {
    try {
      await productService.delete(req);
      responseHandler(res, "product has been deleted");
    } catch (error) {
      next(error);
    }
  }

  async getProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await productService.getList(req);

      responseHandler(res, "fetching products", data);
    } catch (error) {
      next(error);
    }
  }

  async getProductBySlug(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await productService.getBySlug(req);
      if (!data) throw new ErrorHandler("product not found", 404);
      responseHandler(res, "fetching product with slug", data);
    } catch (error) {
      next(error);
    }
  }
}

export default new ProductController();
