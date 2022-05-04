import { Router } from "express";
import { prisma } from "../database.js";

const adminRouter = Router();

adminRouter.delete("/database", async (req, res) => {
  await prisma.$executeRawUnsafe('TRUNCATE TABLE "recommendations"');
  res.sendStatus(200);
});

export default adminRouter;
