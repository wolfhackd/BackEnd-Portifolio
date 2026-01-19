import type { CreateCategoryBody, ICategorySchema } from "./category.type.js";
import { Category } from "../../database/models/category.js";
import type { CategoryRepository } from "./category.repository.js";

export class CategoryService {
  constructor(private categoryRepository: CategoryRepository) {}

  public createCategory = async (data: CreateCategoryBody): Promise<any> => {
    const categoryDomain = new Category({
      name: data.name,
    });

    const category =
      await this.categoryRepository.createCategory(categoryDomain);

    return category;
  };

  public listCategories = async () => {
    const categories = await this.categoryRepository.listCategories();
    if (!categories) return "Categories not found";
    return categories;
  };

  public deleteCategory = async (id: string) => {
    const categoryExists = await this.categoryRepository.getCategory(id);
    if (!categoryExists) return "Category not found";

    const category = await this.categoryRepository.deleteCategory(id);
    return "Category deleted successfully";
  };
}
