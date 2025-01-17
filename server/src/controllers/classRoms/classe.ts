import { Request, Response } from "express";
import { prisma } from "../../prisma";

const classe = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const classe = await prisma.sala_de_aula.findUnique({
      where: {
        id: Number(id),
      },
    });

    res.status(200).json(classe);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export default classe;
