"use strict";
/** @format */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_handler_1 = require("../helpers/response.handler");
const product_service_1 = __importDefault(require("../services/product.service"));
class ProductController {
    createProduct(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield product_service_1.default.create(req);
                (0, response_handler_1.responseHandler)(res, "new product has been created", undefined, 201);
            }
            catch (error) {
                next(error);
            }
        });
    }
    updateProduct(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield product_service_1.default.update(req);
                (0, response_handler_1.responseHandler)(res, "new product has been updated");
            }
            catch (error) {
                next(error);
            }
        });
    }
    deleteProduct(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield product_service_1.default.delete(req);
                (0, response_handler_1.responseHandler)(res, "product has been deleted");
            }
            catch (error) {
                next(error);
            }
        });
    }
    getProducts(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield product_service_1.default.getList(req);
                (0, response_handler_1.responseHandler)(res, "fetching products", data);
            }
            catch (error) {
                next(error);
            }
        });
    }
    getProductBySlug(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield product_service_1.default.getBySlug(req);
                if (!data)
                    throw new response_handler_1.ErrorHandler("product not found", 404);
                (0, response_handler_1.responseHandler)(res, "fetching product with slug", data);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = new ProductController();
