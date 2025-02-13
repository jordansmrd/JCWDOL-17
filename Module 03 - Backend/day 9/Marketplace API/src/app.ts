/** @format */
import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { PORT } from "./config";
import { ErrorHandler } from "./helpers/response.handler";
import { productRouter } from "./routers/product.controller";
import { authRouter } from "./routers/auth.router";
export class App {
  private app: Application;
  constructor() {
    this.app = express();
    this.configure();
    this.routes();
    this.handleError();
  }

  private routes() {
    this.app.use("/api/products", productRouter());
    this.app.use("/api/auth", authRouter());
  }

  private configure() {
    this.app.use(express.json()); // accessing req.body (json)
    // this.app.use(express.urlencoded());
    this.app.use(
      cors({
        origin: ["https://kicks-17.vercel.app/"],
      })
    );
  }

  private handleError() {
    //not found handler
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      res.status(404).send("Not found !");
    });

    //error handler
    this.app.use(
      (err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
        res.status(err.code || 500).send({
          message: err.message,
        });
      }
    );
  }

  start() {
    this.app.listen(PORT, () => {
      console.log("marketplace API is running on PORT", PORT);
    });
  }
}
