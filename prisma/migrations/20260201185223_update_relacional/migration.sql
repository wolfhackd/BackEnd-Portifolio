/*
  Warnings:

  - Made the column `categoryId` on table `Technology` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Technology" DROP CONSTRAINT "Technology_categoryId_fkey";

-- AlterTable
ALTER TABLE "Technology" ALTER COLUMN "categoryId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Technology" ADD CONSTRAINT "Technology_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
