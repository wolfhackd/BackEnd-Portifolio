import type { FastifyReply, FastifyRequest } from "fastify";
import type { TechnologyService } from "./technology.service.js";
import { createTechnologyInput } from "./technology.type.js";

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
}
