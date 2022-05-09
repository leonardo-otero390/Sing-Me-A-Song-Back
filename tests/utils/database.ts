import { prisma } from "../../src/database.js";

export async function clearDatabase() {
  await prisma.$executeRawUnsafe('TRUNCATE TABLE "recommendations"');
}

export async function disconnect() {
  await prisma.$disconnect();
}
