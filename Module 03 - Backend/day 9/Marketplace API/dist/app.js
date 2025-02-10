"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
/** @format */
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config");
const product_controller_1 = require("./routers/product.controller");
const auth_router_1 = require("./routers/auth.router");
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.configure();
        this.routes();
        this.handleError();
    }
    routes() {
        this.app.use("/api/products", (0, product_controller_1.productRouter)());
        this.app.use("/api/auth", (0, auth_router_1.authRouter)());
    }
    configure() {
        this.app.use(express_1.default.json()); // accessing req.body (json)
        // this.app.use(express.urlencoded());
        this.app.use((0, cors_1.default)());
    }
    handleError() {
        //not found handler
        this.app.use((req, res, next) => {
            res.status(404).send("Not found !");
        });
        //error handler
        this.app.use((err, req, res, next) => {
            res.status(err.code || 500).send({
                message: err.message,
            });
        });
    }
    start() {
        this.app.listen(config_1.PORT, () => {
            console.log("marketplace API is running on PORT", config_1.PORT);
        });
    }
}
exports.App = App;
