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
Object.defineProperty(exports, "__esModule", { value: true });
const slug_generator_1 = require("../helpers/slug.generator");
const config_1 = require("../config");
const pagination_1 = require("../helpers/pagination");
class ProductService {
    create(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { product_name, img_src, price } = req.body;
            const data = {
                product_name,
                img_src,
                price,
                slug: (0, slug_generator_1.slugGenerator)(product_name),
            };
            yield config_1.prisma.product.create({
                data,
            });
        });
    }
    update(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            const { product_name, img_src, price } = req.body;
            const data = {};
            if (product_name)
                data.product_name = product_name;
            if (img_src)
                data.img_src = img_src;
            if (price)
                data.price = price;
            yield config_1.prisma.product.update({
                data,
                where: { id, isDeleted: null },
            });
        });
    }
    delete(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            yield config_1.prisma.product.update({
                data: {
                    isDeleted: new Date(),
                },
                where: {
                    id,
                },
            });
        });
    }
    getBySlug(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { slug } = req.params;
            return yield config_1.prisma.product.findUnique({
                where: {
                    slug,
                    isDeleted: null,
                },
            });
        });
    }
    getList(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { page, product_name } = req.query;
            return yield config_1.prisma.product.findMany(Object.assign({ where: {
                    product_name: {
                        contains: String(product_name || ""),
                    },
                    isDeleted: null,
                } }, (0, pagination_1.pagination)(Number(page), 16)));
        });
    }
}
exports.default = new ProductService();
