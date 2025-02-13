"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploader = void 0;
/** @format */
const multer_1 = __importDefault(require("multer"));
const maxSize = 5048576;
const multerConfig = {
    fileFilter: (req, file, cb) => {
        if (file.mimetype.split("/")[0] != "image") {
            return cb(new Error("file type is not image"));
        }
        const fileSize = parseInt(req.headers["content-length"] || "");
        if (fileSize > maxSize) {
            return cb(new Error("max size 5mb"));
        }
        return cb(null, true);
    },
    limits: {
        fileSize: maxSize, //1mb
    },
};
const uploader = () => (0, multer_1.default)(Object.assign({}, multerConfig));
exports.uploader = uploader;
