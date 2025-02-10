"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByEmail = void 0;
const config_1 = require("../config");
const getUserByEmail = (email) => config_1.prisma.user.findUnique({
    select: {
        id: true,
        password: true,
        email: true,
        first_name: true,
        last_name: true,
        img_src: true,
        role: true,
    },
    where: {
        email,
    },
});
exports.getUserByEmail = getUserByEmail;
