/*
  Warnings:

  - You are about to drop the column `categotyId` on the `Technology` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Technology" DROP CONSTRAINT "Technology_categotyId_fkey";

-- AlterTable
ALTER TABLE "Technology" DROP COLUMN "categotyId",
ADD COLUMN     "categoryId" TEXT;

-- AddForeignKey
ALTER TABLE "Technology" ADD CONSTRAINT "Technology_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
