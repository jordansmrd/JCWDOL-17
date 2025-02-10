"use strict";
/** @format */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hbs = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const handlebars_1 = __importDefault(require("handlebars"));
const hbs = (fileName) => {
    const templatePath = (0, path_1.join)(__dirname, "../templates/", fileName);
    console.log(templatePath, "test");
    const templateSource = (0, fs_1.readFileSync)(templatePath, "utf-8");
    return handlebars_1.default.compile(templateSource);
};
exports.hbs = hbs;
