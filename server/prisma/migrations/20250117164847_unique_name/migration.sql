/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `sala_de_aula` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "sala_de_aula_nome_key" ON "sala_de_aula"("nome");
