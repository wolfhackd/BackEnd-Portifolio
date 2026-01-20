import { prisma } from "../../database/database.js";
import type { Technology } from "../../database/models/technology.js";
import type { PrismaClient } from "../../generated/prisma/client.js";

export class TechnologyRepository {
  constructor(private readonly database: PrismaClient = prisma) {}

  public createTechnology(data: Technology) {
    return this.database.technology.create({ data });
  }

  public listTechnologies() {
    return this.database.technology.findMany({});
  }
}
