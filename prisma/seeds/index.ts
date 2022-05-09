import { prisma } from '../../src/database.js';
import songs from './songsMock.js';

async function main() {
  await prisma.recommendation.upsert({
    where: { name: songs[0].name },
    update: {},
    create: songs[0],
  });
  await prisma.recommendation.upsert({
    where: { name: songs[1].name },
    update: {},
    create: songs[1],
  });
  await prisma.recommendation.upsert({
    where: { name: songs[2].name },
    update: {},
    create: songs[2],
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
