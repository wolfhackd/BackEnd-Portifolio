import type { FastifyRequest, FastifyReply } from "fastify";
import { createCategoryInput } from "./category.type.js";
import type { CategoryService } from "./category.service.js";

export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  public createCategory = async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      const data = createCategoryInput.parse(req.body);

      if (!data) {
        return reply.status(400).send({ error: "Invalid data" });
      }

      const res = await this.categoryService.createCategory(data);

      return reply.status(201).send(res);
    } catch (e: any) {
      console.error("DETAILS TO ERROR:", e);
      return reply.status(500).send({
        error: "Internal Error",
        message: e.message,
      });
    }
  };

  public listCategories = async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      const res = await this.categoryService.listCategories();

      return reply.status(200).send(res);
    } catch (e: any) {
      return reply.status(500).send({
        error: "Internal Error",
        message: e.message,
      });
    }
  };

  public deleteCategory = async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      const { id } = req.body as { id: string };
      if (!id) {
        return reply.status(400).send({ error: "Invalid data" });
      }

      const res = await this.categoryService.deleteCategory(id);

      return reply.status(200).send(res);
    } catch (e: any) {
      return reply.status(500).send({
        error: "Internal Error",
        message: e.message,
      });
    }
  };
}
