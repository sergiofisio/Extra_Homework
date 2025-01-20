-- CreateTable
CREATE TABLE "sala_de_aula" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "materia" TEXT NOT NULL,
    "professor" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sala_de_aula_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "materia_da_aula" (
    "id" SERIAL NOT NULL,
    "materia" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "sala_de_aulaId" INTEGER NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "materia_da_aula_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sala_de_aula_nome_key" ON "sala_de_aula"("nome");

-- AddForeignKey
ALTER TABLE "materia_da_aula" ADD CONSTRAINT "materia_da_aula_sala_de_aulaId_fkey" FOREIGN KEY ("sala_de_aulaId") REFERENCES "sala_de_aula"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
