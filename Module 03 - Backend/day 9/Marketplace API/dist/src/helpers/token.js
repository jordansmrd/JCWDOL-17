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
exports.generateAuthToken = void 0;
const config_1 = require("../config");
const jsonwebtoken_1 = require("jsonwebtoken");
const user_prisma_1 = require("./user.prisma");
const response_handler_1 = require("./response.handler");
const generateAuthToken = (user, email) => __awaiter(void 0, void 0, void 0, function* () {
    const existingUser = user || (yield (0, user_prisma_1.getUserByEmail)(email));
    if (!existingUser)
        throw new response_handler_1.ErrorHandler("wrong email", 401);
    delete existingUser.password;
    const access_token = (0, jsonwebtoken_1.sign)(existingUser, config_1.jwt_secret, {
        expiresIn: "1m",
    });
    const refresh_token = (0, jsonwebtoken_1.sign)({ email: existingUser.email }, config_1.refresh_jwt_secret, {
        expiresIn: "1h",
    });
    return { access_token, refresh_token };
});
exports.generateAuthToken = generateAuthToken;
