"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.node_account = exports.cloudinary_config = exports.refresh_jwt_secret = exports.jwt_secret = exports.prisma = exports.PORT = void 0;
/** @format */
const dotenv_1 = require("dotenv");
const path_1 = require("path");
const client_1 = require("@prisma/client");
(0, dotenv_1.config)({ path: (0, path_1.resolve)(__dirname, `../${".env"}`) });
const NODE_ENV = process.env.NODE_ENV || "development";
const envFile = NODE_ENV === "development" ? ".env.local" : ".env";
(0, dotenv_1.config)({ path: (0, path_1.resolve)(__dirname, `../${envFile}`), override: true });
exports.PORT = process.env.PORT || 8000;
exports.prisma = new client_1.PrismaClient();
exports.jwt_secret = process.env.ACCESS_SECRET || "";
exports.refresh_jwt_secret = process.env.REFRESH_SECRET || "";
exports.cloudinary_config = process.env.CLOUDINARY_URL || "";
exports.node_account = {
    user: process.env.NODEMAILER_USER || "",
    pass: process.env.NODEMAILER_PASS || "",
};
