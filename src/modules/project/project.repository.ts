import { prisma } from "../../database/database.js";
import type { PrismaClient } from "../../generated/prisma/client.js";

export class ProjectRepository {
  constructor(private readonly database: PrismaClient = prisma) {}

  async listProjects() {
    return await this.database.project.findMany({
      include: {
        technologies: true,
        challenges: true,
      },
    });
  }

  async getProject(id: string) {
    return await this.database.project.findUnique({
      where: { id },
      include: {
        technologies: true,
        challenges: true,
      },
    });
  }

  async createProject(project: any) {
    const { technologies, challenges, ...projectData } = project;

    return await this.database.project.create({
      data: {
        ...projectData,
        technologies: {
          connect: technologies.map((techId: string) => ({ id: techId })),
        },
        challenges: {
          connect: challenges.map((challengeId: string) => ({
            id: challengeId,
          })),
        },
      },
    });
  }

  async deleteProject(id: string) {
    return await this.database.project.delete({ where: { id } });
  }
}
