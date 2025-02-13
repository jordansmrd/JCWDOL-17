/** @format */

import express, { Application, NextFunction, Request, Response } from "express";
import cron from "node-cron";
import { appendFileSync } from "fs";
import dayjs from "dayjs";
const app: Application = express();
const PORT = 8000;

app.use((req: Request, res: Response, next: NextFunction) => {
  //   const timestamp = new Date().toISOString(); //2025-02-10T12:35:30.326Z
  const timestamp = dayjs().format("YYYY-MM-DD HH:mm:ss"); // 2025-02-10 19:40:20

  const logMessage = `${timestamp} visited ${req.ip}\n`;
  appendFileSync("log.txt", logMessage);

  next();
});

app.get("/", (req: Request, res: Response) => {
  throw new Error("test error");
  res.send({
    message: "Welcome to my API",
  });
});

app.get("/users", (req: Request, res: Response) => {
  throw new Error("test error dari user");
  res.send({
    message: "Welcome to my API",
  });
});

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  const timestamp = dayjs().format("YYYY-MM-DD HH:mm:ss"); // 2025-02-10 19:40:20
  const logMessage = `${timestamp} ${error.message} route: ${req.url}\n`;
  appendFileSync("error.txt", logMessage);

  res.status(500).send({
    message: error.message,
  });
});

// # ┌────────────── second (optional)
// # │ ┌──────────── minute
// # │ │ ┌────────── hour
// # │ │ │ ┌──────── day of month
// # │ │ │ │ ┌────── month
// # │ │ │ │ │ ┌──── day of week
// # │ │ │ │ │ │
// # │ │ │ │ │ │
// # * * * * * *
// https://www.npmjs.com/package/node-cron

const scheduleTask = () => {
  cron.schedule("* * * * *", () => {
    console.log("setiap menit");
  }); // running every minute
  cron.schedule("20-22 * * * *", () => {
    console.log("setiap menit ke 20");
    //check ke db. check tgl transaction sudah melewati batas dan status = waiting for payment.
  }); // running every minute
};

scheduleTask();

app.listen(PORT, () => {
  console.log("api is running on port", PORT);
});
