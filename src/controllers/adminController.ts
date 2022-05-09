import { Request, Response } from "express";
import { Recommendation } from "@prisma/client";
import { prisma } from "../database.js";

export async function truncateDatabase(req: Request, res: Response) {
  await prisma.$executeRawUnsafe('TRUNCATE TABLE "recommendations"');
  res.sendStatus(200);
}

export async function populateDatabase(req: Request, res: Response) {
  const data = [
    {
      name: "Ludovico Einaudi - Experience",
      youtubeLink: "https://www.youtube.com/watch?v=hN_q-_nGv4U",
      score: 5,
    },
    {
      name: "Ylvis - Stonehenge",
      youtubeLink: "https://www.youtube.com/watch?v=mbyzgeee2mg",
    },
    {
      name: "TENACIOUS D - Kickapoo",
      youtubeLink: "https://www.youtube.com/watch?v=hvvjiE4AdUI",
    },
  ];
  await prisma.recommendation.createMany({ data });
  res.sendStatus(201);
}
