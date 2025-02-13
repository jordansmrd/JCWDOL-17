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
const config_1 = require("../config");
const bcrypt_1 = require("../helpers/bcrypt");
const bcrypt_2 = require("bcrypt");
const user_prisma_1 = require("../helpers/user.prisma");
const response_handler_1 = require("../helpers/response.handler");
const token_1 = require("../helpers/token");
const cloudinary_1 = require("../helpers/cloudinary");
class AuthService {
    signIn(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            const user = (yield (0, user_prisma_1.getUserByEmail)(email));
            if (!user)
                throw new response_handler_1.ErrorHandler("The email that you've entered is incorrect.", 401);
            else if (!(yield (0, bcrypt_2.compare)(password, user.password)))
                throw new response_handler_1.ErrorHandler("The password that you've entered is incorrect.", 401);
            return yield (0, token_1.generateAuthToken)(user); // access_token, refresh_token
        });
    }
    signUp(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password, first_name, last_name } = req.body;
            yield config_1.prisma.user.create({
                data: {
                    email,
                    password: yield (0, bcrypt_1.hashedPassword)(password),
                    first_name,
                    last_name,
                },
            });
        });
    }
    updateUser(req) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const { first_name, last_name } = req.body;
            const id = Number((_a = req.user) === null || _a === void 0 ? void 0 : _a.id);
            const data = {};
            if (first_name)
                data.first_name = first_name;
            if (last_name)
                data.last_name = last_name;
            yield config_1.prisma.user.update({
                data,
                where: {
                    id,
                },
            });
            return yield this.refreshToken(req);
        });
    }
    uploadAvatar(req) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const id = Number((_a = req.user) === null || _a === void 0 ? void 0 : _a.id);
            const { file } = req;
            if (!file)
                throw new Error("No File Uploaded");
            const { secure_url } = yield (0, cloudinary_1.cloudinaryUpload)(file);
            yield config_1.prisma.user.update({
                data: {
                    img_src: secure_url,
                },
                where: {
                    id,
                },
            });
        });
    }
    refreshToken(req) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            if (!((_a = req.user) === null || _a === void 0 ? void 0 : _a.email))
                throw new response_handler_1.ErrorHandler("invalid token");
            return yield (0, token_1.generateAuthToken)(undefined, (_b = req.user) === null || _b === void 0 ? void 0 : _b.email);
        });
    }
}
exports.default = new AuthService();
