-- CreateTable
CREATE TABLE "materia" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "imagem" TEXT NOT NULL,

    CONSTRAINT "materia_pkey" PRIMARY KEY ("id")
);
