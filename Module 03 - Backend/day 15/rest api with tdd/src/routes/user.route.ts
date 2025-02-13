/** @format */

import { PrismaClient } from "@prisma/client";
import { Response, Router, Request } from "express";

const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    res.send({
      message: "ok",
      data: [],
    });
  } catch (error) {
    if (error instanceof Error)
      res.status(500).send({
        message: error.message,
      });
  }
});

const prisma = new PrismaClient();

router.get("/prisma", async (req: Request, res: Response) => {
  try {
    const data = await prisma.user.findMany({
      select: {
        firstName: true,
        lastName: true,
        email: true,
      },
    });

    res.send({
      message: "ok",
      data,
    });
  } catch (error) {
    if (error instanceof Error)
      res.status(500).send({
        message: error.message,
      });
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    if (
      Number(req.params.id) > 10 ||
      Number(req.params.id) < 1 ||
      isNaN(Number(req.params.id))
    )
      throw new Error("id out of range");
    res.send({
      message: "ok",
      data: req.params.id,
    });
  } catch (error) {
    if (error instanceof Error)
      res.status(500).send({
        message: error.message,
      });
  }
});

export default router;
