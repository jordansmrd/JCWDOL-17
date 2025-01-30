/** @format */

import { Router } from "express";
import authController from "../controllers/auth.controller";
import { registerValidation, verifyUser } from "../middlewares/auth.middleware";
import { registerSchema } from "../models/user.model";

export const authRouter = () => {
  const router = Router();

  router.post(
    "/new",
    registerValidation(registerSchema),
    authController.signUp
  );
  router.post("/", authController.signIn);
  router.patch("/", verifyUser, authController.updateUser);

  return router;
};
