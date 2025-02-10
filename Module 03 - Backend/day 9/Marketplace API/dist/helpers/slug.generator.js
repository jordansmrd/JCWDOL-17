"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.slugGenerator = void 0;
const slugGenerator = (title) => title.toLowerCase().replace(/ /gi, "-") + "-" + new Date().valueOf();
exports.slugGenerator = slugGenerator;
