"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseHandler = exports.ErrorHandler = void 0;
class ErrorHandler extends Error {
    constructor(message, code) {
        super(message);
        this.code = code || 500;
    }
}
exports.ErrorHandler = ErrorHandler;
const responseHandler = (res, message, data, code) => {
    return res.status(code || 200).send({
        message,
        data,
    });
};
exports.responseHandler = responseHandler;
