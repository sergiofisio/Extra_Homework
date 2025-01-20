import { Request, Response } from "express";
import { prisma } from "../../prisma";

const normalizeString = (str: string): string =>
  str
    .toLowerCase() // Converte para minúsculas
    .normalize("NFD") // Normaliza os caracteres acentuados
    .replace(/[\u0300-\u036f]/g, ""); // Remove os diacríticos

const deleteClass = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const find = await prisma.sala_de_aula.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!find) throw new Error("Sala de aula não encontrada");

    await prisma.sala_de_aula.delete({
      where: {
        id: Number(id),
      },
    });

    res.status(200).json({ message: "Sala de aula excluída com sucesso" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const deleteAllInClasse = async (req: Request, res: Response) => {
  const { materia } = req.params;
  console.log(materia);

  try {
    const normalizedMateria = normalizeString(materia);
    const classesToDelete = await prisma.sala_de_aula.findMany();

    const filtro = classesToDelete.filter(
      (sala) => normalizeString(sala.materia) === normalizedMateria
    );

    if (!filtro.length) throw new Error("Nenhuma sala de aula encontrada");

    const idClassesToDelete = filtro.map((classe) => classe.id);

    await prisma.sala_de_aula.deleteMany({
      where: {
        id: {
          in: idClassesToDelete,
        },
      },
    });

    res.status(200).json({ message: "Todas as salas de aula foram excluídas" });
  } catch (error: any) {
    console.error(error);

    res.status(500).json({ error: error.message });
  }
};

export { deleteClass, deleteAllInClasse };
