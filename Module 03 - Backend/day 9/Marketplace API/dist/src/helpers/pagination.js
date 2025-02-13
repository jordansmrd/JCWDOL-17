"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.pagination = void 0;
const pagination = (page, take = 5) => {
    const skip = !page || page < 1 ? 0 : (page - 1) * Number(take || 5);
    return { skip, take };
};
exports.pagination = pagination;
