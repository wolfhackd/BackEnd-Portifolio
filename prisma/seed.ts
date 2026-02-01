import { prisma } from "../src/database/database.js";
//Lists
import CategoryList from "../prisma/seed/Category.js";
import TechnologyList from "../prisma/seed/Technology.js";
import ProjectList from "../prisma/seed/Project.js";
import ChallengeList from "../prisma/seed/Challenge.js";

//Category -> Technology -> Project -> Challenge

const Seed = async () => {
  try {
    await prisma.$transaction(async (tx) => {
      await tx.category.createMany({
        data: CategoryList,
        skipDuplicates: true,
      });
      await tx.technology.createMany({
        data: TechnologyList,
        skipDuplicates: true,
      });
      //Sobe os Projetos com a data errada
      await tx.project.createMany({
        data: ProjectList,
        skipDuplicates: true,
      });
      await tx.challenge.createMany({
        data: ChallengeList,
        skipDuplicates: true,
      });
    });

    return console.log("seeded");
  } catch (error) {
    return console.log("error to seed" + error);
  }
};

Seed();
