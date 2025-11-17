/*
  Warnings:

  - You are about to drop the `ProjectTechnology` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."ProjectTechnology" DROP CONSTRAINT "ProjectTechnology_projectId_fkey";

-- DropForeignKey
ALTER TABLE "public"."ProjectTechnology" DROP CONSTRAINT "ProjectTechnology_technologyId_fkey";

-- DropTable
DROP TABLE "public"."ProjectTechnology";

-- CreateTable
CREATE TABLE "_ProjectTechs" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ProjectTechs_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ProjectTechs_B_index" ON "_ProjectTechs"("B");

-- AddForeignKey
ALTER TABLE "_ProjectTechs" ADD CONSTRAINT "_ProjectTechs_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectTechs" ADD CONSTRAINT "_ProjectTechs_B_fkey" FOREIGN KEY ("B") REFERENCES "Technology"("id") ON DELETE CASCADE ON UPDATE CASCADE;
