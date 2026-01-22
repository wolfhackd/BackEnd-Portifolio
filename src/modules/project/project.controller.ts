import type { FastifyReply, FastifyRequest } from "fastify";
import { createProjectInput } from "./project.type.js";
import type { ProjectService } from "./project.service.js";

export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  public createProject = async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      const data = createProjectInput.parse(req.body);

      if (!data) {
        return reply.status(400).send({ error: "Invalid data" });
      }

      const res = await this.projectService.createProject(data);

      return reply.status(201).send(res);
    } catch (e: any) {
      console.error("DETAILS TO ERROR:", e);
      return reply.status(500).send({
        error: "Internal Error",
        message: e.message,
      });
    }
  };

  public listProjects = async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      const res = await this.projectService.listProjects();

      return reply.status(200).send(res);
    } catch (e: any) {
      return reply.status(500).send({
        error: "Internal Error",
        message: e.message,
      });
    }
  };
}
