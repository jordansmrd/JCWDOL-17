"use strict";
/** @format */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
const user_model_1 = require("../models/user.model");
const multer_1 = require("../helpers/multer");
const authRouter = () => {
    const router = (0, express_1.Router)();
    router.post("/new", (0, auth_middleware_1.registerValidation)(user_model_1.registerSchema), auth_controller_1.default.signUp);
    router.post("/", auth_controller_1.default.signIn);
    router.post("/token", auth_middleware_1.verifyRefreshToken, auth_controller_1.default.refreshToken);
    router.patch("/", auth_middleware_1.verifyUser, auth_controller_1.default.updateUser);
    router.post("/image", auth_middleware_1.verifyUser, (0, multer_1.uploader)().single("image"), auth_controller_1.default.addImageCloudinary);
    router.delete("/image", auth_middleware_1.verifyUser, auth_controller_1.default.removeImageCloudinary);
    router.post("/mail", auth_controller_1.default.sendMail);
    return router;
};
exports.authRouter = authRouter;
