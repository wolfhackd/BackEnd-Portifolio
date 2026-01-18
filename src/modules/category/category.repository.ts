import { prisma } from "../../database/database.js";
import type { Category } from "../../database/models/category.js";
import type { PrismaClient } from "../../generated/prisma/client.js";

export class CategoryRepository {
  constructor(private readonly database: PrismaClient = prisma) {}

  async createCategory(data: Category) {
    const category = await this.database.category.create({
      data: {
        name: data.name,
        id: data.id,
      },
    });
    return category;
  }
}
