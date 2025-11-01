/*
  Warnings:

  - The primary key for the `Challenge` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Project` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ProjectTechnology` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Technology` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "public"."Challenge" DROP CONSTRAINT "Challenge_projectId_fkey";

-- DropForeignKey
ALTER TABLE "public"."ProjectTechnology" DROP CONSTRAINT "ProjectTechnology_projectId_fkey";

-- DropForeignKey
ALTER TABLE "public"."ProjectTechnology" DROP CONSTRAINT "ProjectTechnology_technologyId_fkey";

-- AlterTable
ALTER TABLE "Challenge" DROP CONSTRAINT "Challenge_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "projectId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Challenge_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Challenge_id_seq";

-- AlterTable
ALTER TABLE "Project" DROP CONSTRAINT "Project_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Project_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Project_id_seq";

-- AlterTable
ALTER TABLE "ProjectTechnology" DROP CONSTRAINT "ProjectTechnology_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "projectId" SET DATA TYPE TEXT,
ALTER COLUMN "technologyId" SET DATA TYPE TEXT,
ADD CONSTRAINT "ProjectTechnology_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ProjectTechnology_id_seq";

-- AlterTable
ALTER TABLE "Technology" DROP CONSTRAINT "Technology_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Technology_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Technology_id_seq";

-- AddForeignKey
ALTER TABLE "Challenge" ADD CONSTRAINT "Challenge_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectTechnology" ADD CONSTRAINT "ProjectTechnology_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectTechnology" ADD CONSTRAINT "ProjectTechnology_technologyId_fkey" FOREIGN KEY ("technologyId") REFERENCES "Technology"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
