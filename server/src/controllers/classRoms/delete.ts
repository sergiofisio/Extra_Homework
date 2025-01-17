import { Request, Response } from "express";
import { prisma } from "../../prisma";

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

export default deleteClass;
