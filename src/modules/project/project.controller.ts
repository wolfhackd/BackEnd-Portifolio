import type { FastifyReply, FastifyRequest } from "fastify";
import {
  createProjectInput,
  ProjectInput,
  ProjectUpdateInput,
} from "./project.type.js";
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

      if (!res) {
        return reply.status(404).send({ error: "Projects not found" });
      }

      return reply.status(200).send(res);
    } catch (e: any) {
      return reply.status(500).send({
        error: "Internal Error",
        message: e.message,
      });
    }
  };

  public deleteProject = async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      const { id } = req.params as { id: string };

      if (!id) {
        return reply.status(400).send({ error: "Invalid data" });
      }

      const project = await this.projectService.getProject(id);

      if (!project) {
        return reply.status(404).send({ error: "Project not found" });
      }

      const res = await this.projectService.deleteProject(id);
      return reply.status(200).send("Deleted successfully");
    } catch (e: any) {
      return reply.status(500).send({
        error: "Internal Error",
        message: e.message,
      });
    }
  };

  public getProject = async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      const { id } = req.params as { id: string };

      if (!id) {
        return reply.status(400).send({ error: "Invalid data" });
      }

      const res = await this.projectService.getProject(id);
      return reply.status(200).send(res);
    } catch (e: any) {
      return reply.status(500).send({
        error: "Internal Error",
        message: e.message,
      });
    }
  };

  public updateProject = async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      const { id } = req.params as { id: string };

      if (!id) {
        return reply.status(400).send({ error: "Invalid id" });
      }

      const data = ProjectUpdateInput.parse(req.body);

      if (!data) {
        return reply.status(400).send({ error: "Invalid data" });
      }

      const res = await this.projectService.updateProject(id, data);
      return reply.status(200).send(res);
    } catch (e: any) {
      return reply.status(500).send({
        error: "Internal Error",
        message: e.message,
      });
    }
  };
}
