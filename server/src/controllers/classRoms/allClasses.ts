import { Request, Response } from "express";
import { prisma } from "../../prisma";

const allClasses = async (_: Request, res: Response) => {
  try {
    const classrooms = await prisma.sala_de_aula.findMany();

    res.status(200).json(classrooms);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export default allClasses;
