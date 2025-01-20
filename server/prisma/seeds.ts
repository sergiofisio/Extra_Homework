import fs from "fs";
import path from "path";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  try {
    const seedsPath = path.join(__dirname, "seed");

    const files = fs.readdirSync(seedsPath);

    for (const file of files) {
      const seed = require(path.join(seedsPath, file));

      await seed(prisma);
    }
    await prisma.$disconnect();
  } catch (error: any) {
    console.error(error);
  }
}

seed().catch((e) => {
  console.error(e);
});
