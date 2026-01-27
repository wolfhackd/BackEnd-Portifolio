import { prisma } from "../../database/database.js";
import type { Technology } from "../../database/models/technology.js";
import type { PrismaClient } from "../../generated/prisma/client.js";

export class TechnologyRepository {
  constructor(private readonly database: PrismaClient = prisma) {}

  public createTechnology(tech: Technology) {
    return this.database.technology.create({
      data: {
        name: tech.name,
        color: tech.color,
        icon: tech.icon,
        category: { connect: { id: tech.categoryId } },
      },
    });
  }

  public listTechnologies() {
    return this.database.technology.findMany({});
  }

  public deleteTechnology(id: string) {
    return this.database.technology.delete({ where: { id } });
  }
}
