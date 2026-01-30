import { jest, describe, it, expect, beforeEach } from "@jest/globals";
import { CategoryService } from "../../modules/category/category.service.js";
import { CategoryRepository } from "../../modules/category/category.repository.js";
import { Category } from "../../database/models/category.js";

describe("CategoryService", () => {
  let service: CategoryService;
  let repositoryMock: jest.Mocked<CategoryRepository>;

  beforeEach(() => {
    repositoryMock = {
      createCategory: jest.fn(),
      listCategories: jest.fn(),
      getCategory: jest.fn(),
      deleteCategory: jest.fn(),
    } as unknown as jest.Mocked<CategoryRepository>;

    service = new CategoryService(repositoryMock);
  });

  describe("createCategory", () => {
    it("deve criar uma categoria", async () => {
      const input = { name: "ORM" };
      const outputMock = { id: "1", name: "ORM" };
      repositoryMock.createCategory.mockResolvedValue(outputMock);

      const result = await service.createCategory(input);

      expect(result).toEqual(outputMock);
      expect(repositoryMock.createCategory).toHaveBeenCalledWith(
        expect.any(Category),
      );
    });
  });

  describe("getCategory", () => {
    it("deve retornar uma categoria específica pelo ID", async () => {
      const mockId = "any_id";
      const mockCategory = { id: mockId, name: "Games" };
      repositoryMock.getCategory.mockResolvedValue(mockCategory);

      const result = await service.getCategory(mockId);

      expect(result).toEqual(mockCategory);
      expect(repositoryMock.getCategory).toHaveBeenCalledWith(mockId);
    });
  });

  describe("listCategories", () => {
    it("deve retornar todas as categorias", async () => {
      const mockCategories = [
        { id: "any_id", name: "Games" },
        { id: "any_id_2", name: "Games" },
      ];

      repositoryMock.listCategories.mockResolvedValue(mockCategories);

      const result = await service.listCategories();

      expect(result).toEqual(mockCategories);
      expect(repositoryMock.listCategories).toHaveBeenCalled();
    });
  });

  describe("deleteCategory", () => {
    it("deve deletar uma categoria", async () => {
      const mockId = "any_id";
      repositoryMock.deleteCategory.mockResolvedValue(true);

      const result = await service.deleteCategory(mockId);

      expect(result).toBe(true);
      expect(repositoryMock.deleteCategory).toHaveBeenCalledWith(mockId);
    });
  });
});
