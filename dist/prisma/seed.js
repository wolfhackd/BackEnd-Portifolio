import { TECHNOLOGIES } from '../db.js';
import prisma from '../src/lib/prisma.js';
async function main() {
    // const technologies: Technology[] = ;
    await prisma.technology.createMany({ data: Object.values(TECHNOLOGIES), skipDuplicates: true });
    console.log('✅ Tecnologias inseridas com sucesso!');
}
main();
//# sourceMappingURL=seed.js.map