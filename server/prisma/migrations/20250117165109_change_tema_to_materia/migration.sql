/*
  Warnings:

  - You are about to drop the column `tema` on the `sala_de_aula` table. All the data in the column will be lost.
  - Added the required column `materia` to the `sala_de_aula` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "sala_de_aula" DROP COLUMN "tema",
ADD COLUMN     "materia" TEXT NOT NULL;
