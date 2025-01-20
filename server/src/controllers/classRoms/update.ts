import { Request, Response } from "express";
import { prisma } from "../../prisma";

const updateClassRoom = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nome, descricao, materia, professor } = req.body;

  try {
    const find = await prisma.sala_de_aula.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!find) throw new Error("Sala de aula nao encontrada");

    await prisma.sala_de_aula.update({
      where: {
        id: Number(id),
      },
      data: {
        nome,
        descricao,
        materia,
        professor,
      },
    });

    res.status(202).json({ message: "Sala de aula atualizada com sucesso" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export default updateClassRoom;
