import { TECHNOLOGIES } from '../db.js';
import type { Technology } from '../src/controllers/technology/create.js';
import prisma from '../src/lib/prisma.js';

async function main() {
  // const technologies: Technology[] = ;

  await prisma.technology.createMany({ data: Object.values(TECHNOLOGIES), skipDuplicates: true });

  console.log('✅ Tecnologias inseridas com sucesso!');
}
main();
