import type { FastifyReply, FastifyRequest } from "fastify";
import type { TechnologyService } from "./technology.service.js";
import { createTechnologyInput } from "./technology.type.js";
import { Prisma } from "../../generated/prisma/client.js";

export class TechnologyController {
  constructor(private readonly technologyService: TechnologyService) {}

  public createTechnology = async (
    req: FastifyRequest,
    reply: FastifyReply,
  ) => {
    try {
      const data = createTechnologyInput.parse(req.body);
      const res = await this.technologyService.createTechnology(data);
      return reply.status(201).send(res);
    } catch (e: any) {
      return reply.status(500).send({
        error: "Internal Error",
        message: e.message,
      });
    }
  };

  public listTechnologies = async (
    req: FastifyRequest,
    reply: FastifyReply,
  ) => {
    try {
      const res = await this.technologyService.listTechnologies();
      return reply.status(200).send(res);
    } catch (e: any) {
      return reply.status(500).send({
        error: "Internal Error",
        message: e.message,
      });
    }
  };

  public deleteTechnology = async (
    req: FastifyRequest,
    reply: FastifyReply,
  ) => {
    try {
      const { id } = req.body as { id: string };
      const res = await this.technologyService.deleteTechnology(id);
      if (!res)
        return reply.status(404).send({ error: "Technology not found" });
      return reply.status(200).send(res);
    } catch (e: any) {
      {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
          if (e.code === "P2025") {
            return reply.status(404).send({
              error: "Not Found",
              message: "Tecnologia não encontrada ou já deletada.",
            });
          }
        }

        return reply.status(500).send({
          error: "Internal Error",
          message: "Ocorreu um erro inesperado.",
        });
      }
    }
  };
}
