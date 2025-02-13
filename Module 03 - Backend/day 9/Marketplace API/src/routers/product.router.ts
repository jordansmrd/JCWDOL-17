/** @format */

import { Router } from "express";
import productController from "../controllers/product.controller";

export const productRouter = () => {
  const router = Router();

  router.get("/", productController.getProducts);
  router.get("/:slug", productController.getProductBySlug);
  router.post("/", productController.createProduct);
  router.delete("/:id", productController.deleteProduct);
  router.patch("/:id", productController.updateProduct);

  return router;
};
