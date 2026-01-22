import { Project } from "../../database/models/project.js";
import type { ProjectRepository } from "./project.repository.js";
import type { ICreateProject, IProject } from "./project.type.js";

export class ProjectService {
  constructor(private readonly projectRepository: ProjectRepository) {}

  public createProject = async (data: ICreateProject) => {
    const project = new Project(data);

    const savedProject = await this.projectRepository.createProject(project);

    return savedProject;
  };

  public listProjects = async () => {
    return await this.projectRepository.listProjects();
  };
}
