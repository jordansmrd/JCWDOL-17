/** @format */

import express, { Application } from "express";
import userRouter from "./routes/user.route";
const app: Application = express();
const PORT = 8000;

app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log("app is running on port", PORT);
});

export default app;
