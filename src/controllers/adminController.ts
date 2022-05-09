import { Request, Response } from 'express';
import { prisma } from '../database.js';
import songsMock from '../../prisma/seeds/songsMock.js';

export async function truncateDatabase(req: Request, res: Response) {
  await prisma.$executeRawUnsafe('TRUNCATE TABLE "recommendations"');
  res.sendStatus(200);
}

export async function populateDatabase(req: Request, res: Response) {
  const data = songsMock;
  await prisma.recommendation.createMany({ data });
  res.sendStatus(201);
}
