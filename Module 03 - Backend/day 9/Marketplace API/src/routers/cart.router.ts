/** @format */

import { Router } from "express";
import cartController from "../controllers/cart.controller";
import { verifyUser } from "../middlewares/auth.middleware";

export const cartRouter = () => {
  const router = Router();

  router.get("/", verifyUser, cartController.getUserCart);
  router.delete("/:productId", verifyUser, cartController.deleteCart);
  router.post("/", verifyUser, cartController.addToCart);
  router.post("/midtrans", verifyUser, cartController.checkout);

  return router;
};
