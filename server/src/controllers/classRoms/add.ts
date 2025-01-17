import { Request, Response } from "express";
import { prisma } from "../../prisma";

const addClass = async (req: Request, res: Response) => {
  const { nome, descricao, materia } = req.body;
  console.log("rota post");

  try {
    const findClass = await prisma.sala_de_aula.findUnique({
      where: {
        nome,
      },
    });
    if (findClass) throw new Error("Sala de aula ja cadastrada");

    const classroom = await prisma.sala_de_aula.create({
      data: {
        nome,
        descricao,
        materia,
      },
    });

    res.status(201).json({ message: "Sala de aula cadastrada com sucesso" });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export default addClass;
