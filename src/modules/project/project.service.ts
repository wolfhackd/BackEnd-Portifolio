import { Project } from "../../database/models/project.js";
import type { ProjectRepository } from "./project.repository.js";
import type { ICreateProject, IProject } from "./project.type.js";

export class ProjectService {
  constructor(private readonly projectRepository: ProjectRepository) {}

  public createProject = async (data: ICreateProject) => {
    const project = new Project(data);

    const savedProject = await this.projectRepository.createProject(project);

    return new Project(savedProject);
  };

  public listProjects = async () => {
    return await this.projectRepository.listProjects();
  };

  public deleteProject = async (id: string) => {
    return await this.projectRepository.deleteProject(id);
  };

  public getProject = async (id: string) => {
    return await this.projectRepository.getProject(id);
  };

  public updateProject = async (id: string, data: IProject) => {
    return await this.projectRepository.updateProject(id, data);
  };
}
