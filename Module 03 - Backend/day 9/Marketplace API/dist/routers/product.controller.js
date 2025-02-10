"use strict";
/** @format */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
const product_controller_1 = __importDefault(require("../controllers/product.controller"));
const productRouter = () => {
    const router = (0, express_1.Router)();
    router.get("/", product_controller_1.default.getProducts);
    router.get("/:slug", product_controller_1.default.getProductBySlug);
    router.post("/", product_controller_1.default.createProduct);
    router.delete("/:id", product_controller_1.default.deleteProduct);
    router.patch("/:id", product_controller_1.default.updateProduct);
    return router;
};
exports.productRouter = productRouter;
