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
      console.error("DETALHE DO ERRO:", e); // ADICIONE ISSO
      return reply.status(500).send({
        error: "Internal Error",
        message: e.message, // TEMPORÁRIO: para você ver o erro no Postman/Insomnia
      });
    }
  };
}
