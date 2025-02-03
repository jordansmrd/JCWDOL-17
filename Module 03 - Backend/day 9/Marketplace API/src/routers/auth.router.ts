/** @format */

import { Router } from "express";
import authController from "../controllers/auth.controller";
import {
  registerValidation,
  verifyRefreshToken,
  verifyUser,
} from "../middlewares/auth.middleware";
import { registerSchema } from "../models/user.model";
import { uploader } from "../helpers/multer";

export const authRouter = () => {
  const router = Router();

  router.post(
    "/new",
    registerValidation(registerSchema),
    authController.signUp
  );
  router.post("/", authController.signIn);
  router.post("/token", verifyRefreshToken, authController.refreshToken);
  router.patch("/", verifyUser, authController.updateUser);
  router.post(
    "/image",
    verifyUser,
    uploader().single("image"),
    authController.addImageCloudinary
  );
  router.delete("/image", verifyUser, authController.removeImageCloudinary);

  router.post("/mail", authController.sendMail);

  return router;
};
