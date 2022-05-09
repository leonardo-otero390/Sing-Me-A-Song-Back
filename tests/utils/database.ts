import songsMock from '../../prisma/seeds/songsMock.js';
import { prisma } from '../../src/database.js';

export async function clearDatabase() {
  await prisma.$executeRawUnsafe('TRUNCATE TABLE "recommendations"');
}

export async function disconnect() {
  await prisma.$disconnect();
}

export async function populateDatabase() {
  const data = songsMock;
  await prisma.recommendation.createMany({ data });
}

export async function getRandomRecommendation() {
  return prisma.recommendation.findFirst();
}

export async function getRecommendationById(id: number) {
  return prisma.recommendation.findUnique({ where: { id } });
}

export async function getRecommendationByScore(score: number) {
  return prisma.recommendation.findMany({ where: { score } });
}
