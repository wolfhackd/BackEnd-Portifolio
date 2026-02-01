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

  async listCategories() {
    const categories = await this.database.category.findMany({
      include: { technologies: true },
    });
    return categories;
  }

  async getCategory(id: string) {
    const category = await this.database.category.findFirst({
      where: { id: id },
      include: { technologies: true },
    });
    return category;
  }

  async deleteCategory(id: string) {
    const category = await this.database.category.delete({
      where: {
        id,
      },
    });

    if (!category) return false;
    return true;
  }
}
