-- AlterTable
ALTER TABLE "Technology" ADD COLUMN     "categotyId" TEXT;

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Technology" ADD CONSTRAINT "Technology_categotyId_fkey" FOREIGN KEY ("categotyId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
