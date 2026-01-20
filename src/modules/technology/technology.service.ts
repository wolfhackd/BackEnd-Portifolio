import { Technology } from "../../database/models/technology.js";
import type { TechnologyRepository } from "./technology.repository.js";
import type { ITechnology } from "./technology.type.js";

export class TechnologyService {
  constructor(private technologyRepository: TechnologyRepository) {}

  public createTechnology = async (data: ITechnology) => {
    const newTechnology = new Technology(data);

    return await this.technologyRepository.createTechnology(newTechnology);
  };

  public listTechnologies = async () => {
    return await this.technologyRepository.listTechnologies();
  };

  public deleteTechnology = async (id: string) => {
    const res = await this.technologyRepository.deleteTechnology(id);
    if (!res) return "Technology not found";
    return "Technology deleted successfully";
  };
}
