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
const auth_service_1 = __importDefault(require("../services/auth.service"));
const cloudinary_1 = require("../helpers/cloudinary");
const nodemailer_1 = require("../helpers/nodemailer");
const handlebars_1 = require("../helpers/handlebars");
class AuthController {
    signIn(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield auth_service_1.default.signIn(req);
                (0, response_handler_1.responseHandler)(res, "login success", data);
            }
            catch (error) {
                next(error);
            }
        });
    }
    signUp(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield auth_service_1.default.signUp(req);
                (0, response_handler_1.responseHandler)(res, "register success");
            }
            catch (error) {
                next(error);
            }
        });
    }
    updateUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield auth_service_1.default.updateUser(req);
                (0, response_handler_1.responseHandler)(res, "register success", data);
            }
            catch (error) {
                next(error);
            }
        });
    }
    refreshToken(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield auth_service_1.default.refreshToken(req);
                (0, response_handler_1.responseHandler)(res, "refresh token success", data);
            }
            catch (error) {
                next(error);
            }
        });
    }
    addImageCloudinary(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield auth_service_1.default.uploadAvatar(req);
                (0, response_handler_1.responseHandler)(res, "upload image success");
            }
            catch (error) {
                next(error);
            }
        });
    }
    removeImageCloudinary(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const secure_url = req.body.image_url;
                yield (0, cloudinary_1.cloudinaryRemove)(secure_url);
                (0, response_handler_1.responseHandler)(res, "delete image success", secure_url);
            }
            catch (error) {
                next(error);
            }
        });
    }
    sendMail(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const compiledTemplate = (0, handlebars_1.hbs)("template.hbs");
                const html = compiledTemplate({
                    name: req.body.name,
                    email: req.body.email,
                });
                nodemailer_1.transporter.sendMail({
                    to: req.body.email,
                    subject: "Email confimation",
                    html,
                });
                (0, response_handler_1.responseHandler)(res, "check your email");
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = new AuthController();
