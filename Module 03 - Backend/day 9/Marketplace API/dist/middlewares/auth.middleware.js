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
exports.registerValidation = exports.verifyRefreshToken = exports.verifyUser = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = require("../config");
const response_handler_1 = require("../helpers/response.handler");
const user_prisma_1 = require("../helpers/user.prisma");
const verifyUser = (req, res, next) => {
    try {
        const { authorization } = req.headers;
        const token = String(authorization || "").split("Bearer ")[1];
        const verfiedUser = (0, jsonwebtoken_1.verify)(token, config_1.jwt_secret);
        if (!verfiedUser)
            throw new response_handler_1.ErrorHandler("unauthorized", 401);
        req.user = verfiedUser;
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.verifyUser = verifyUser;
const verifyRefreshToken = (req, res, next) => {
    try {
        const { authorization } = req.headers;
        const token = String(authorization || "").split("Bearer ")[1];
        console.log(token);
        const verfiedUser = (0, jsonwebtoken_1.verify)(token, config_1.refresh_jwt_secret);
        req.user = verfiedUser; // {}
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.verifyRefreshToken = verifyRefreshToken;
const registerValidation = (schema) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield schema.validate(req.body);
        if (yield (0, user_prisma_1.getUserByEmail)(req.body.email))
            throw new response_handler_1.ErrorHandler("You may already own an existing account with that email address");
        return next();
    }
    catch (err) {
        next(err);
    }
});
exports.registerValidation = registerValidation;
