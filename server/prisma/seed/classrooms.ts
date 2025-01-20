import { PrismaClient } from "@prisma/client";
import { idText } from "typescript";

const prisma = new PrismaClient();

async function salasSeed() {
  const existingSalaDeAula = await prisma.sala_de_aula.findMany();
  const salasDeAulaToCreate = [
    {
      id: 1,
      nome: "Sala A",
      descricao: "Sala de estudos de Matemática",
      materia: "Matemática",
      professor: "Prof. João",
    },
    {
      id: 2,
      nome: "Sala B",
      descricao: "Laboratório de Ciências",
      materia: "Ciências",
      professor: "Prof. Maria",
    },
    {
      id: 3,
      nome: "Sala C",
      descricao: "Sala de leitura e pesquisa",
      materia: "Português",
      professor: "Prof. José",
    },
    {
      id: 4,
      nome: "Sala D",
      descricao: "Espaço para atividades de Física",
      materia: "Física",
      professor: "Prof. Ana",
    },
    {
      id: 5,
      nome: "Sala E",
      descricao: "Aula prática de Química",
      materia: "Química",
      professor: "Prof. Carlos",
    },
    {
      id: 6,
      nome: "Sala F",
      descricao: "Estudos de Biologia",
      materia: "Biologia",
      professor: "Prof. Laura",
    },
    {
      id: 7,
      nome: "Sala G",
      descricao: "Atividades práticas de Geografia",
      materia: "Geografia",
      professor: "Prof. Pedro",
    },
    {
      id: 8,
      nome: "Sala H",
      descricao: "Espaço de História Geral",
      materia: "História",
      professor: "Prof. Sofia",
    },
    {
      id: 9,
      nome: "Sala I",
      descricao: "Laboratório de Informática",
      materia: "Informática",
      professor: "Prof. Rafael",
    },
    {
      id: 10,
      nome: "Sala J",
      descricao: "Aula de Inglês avançado",
      materia: "Inglês",
      professor: "Prof. Paula",
    },
    {
      id: 11,
      nome: "Sala K",
      descricao: "Estudo de Literatura Brasileira",
      materia: "Português",
      professor: "Prof. Lucas",
    },
    {
      id: 12,
      nome: "Sala L",
      descricao: "Espaço para Matemática financeira",
      materia: "Matemática",
      professor: "Prof. Maria",
    },
    {
      id: 13,
      nome: "Sala M",
      descricao: "Aulas práticas de Química",
      materia: "Química",
      professor: "Prof. Carlos",
    },
    {
      id: 14,
      nome: "Sala N",
      descricao: "Aula de Biologia celular",
      materia: "Biologia",
      professor: "Prof. Laura",
    },
    {
      id: 15,
      nome: "Sala O",
      descricao: "Laboratório de Geografia aplicada",
      materia: "Geografia",
      professor: "Prof. Pedro",
    },
    {
      id: 16,
      nome: "Sala P",
      descricao: "História do Brasil",
      materia: "História",
      professor: "Prof. Sofia",
    },
    {
      id: 17,
      nome: "Sala Q",
      descricao: "Oficina de Redação",
      materia: "Português",
      professor: "Prof. Lucas",
    },
    {
      id: 18,
      nome: "Sala R",
      descricao: "Espaço para estudo de Física aplicada",
      materia: "Física",
      professor: "Prof. Ana",
    },
    {
      id: 19,
      nome: "Sala S",
      descricao: "Atividades práticas de Ciências",
      materia: "Ciências",
      professor: "Prof. Maria",
    },
    {
      id: 20,
      nome: "Sala T",
      descricao: "Laboratório avançado de Química",
      materia: "Química",
      professor: "Prof. Carlos",
    },
    {
      id: 21,
      nome: "Sala U",
      descricao: "Curso de Inglês básico",
      materia: "Inglês",
      professor: "Prof. Paula",
    },
    {
      id: 22,
      nome: "Sala V",
      descricao: "Sala de estudos culturais",
      materia: "Sociologia",
      professor: "Prof. Rafael",
    },
    {
      id: 23,
      nome: "Sala W",
      descricao: "Aula prática de Matemática",
      materia: "Matemática",
      professor: "Prof. João",
    },
    {
      id: 24,
      nome: "Sala X",
      descricao: "Estudo interdisciplinar de Ciências",
      materia: "Ciências",
      professor: "Prof. Maria",
    },
    {
      id: 25,
      nome: "Sala Y",
      descricao: "Espaço para aulas de Filosofia",
      materia: "Filosofia",
      professor: "Prof. Rafael",
    },
    {
      id: 26,
      nome: "Sala Z",
      descricao: "Laboratório de Física avançada",
      materia: "Física",
      professor: "Prof. Ana",
    },
    {
      id: 27,
      nome: "Sala AA",
      descricao: "Espaço de interação cultural",
      materia: "Sociologia",
      professor: "Prof. Rafael",
    },
    {
      id: 28,
      nome: "Sala AB",
      descricao: "Oficina de criação literária",
      materia: "Português",
      professor: "Prof. Lucas",
    },
    {
      id: 29,
      nome: "Sala AC",
      descricao: "História contemporânea",
      materia: "História",
      professor: "Prof. Sofia",
    },
    {
      id: 30,
      nome: "Sala AE",
      descricao: "Laboratório de Biologia genética",
      materia: "Biologia",
      professor: "Prof. Pedro",
    },
    {
      id: 31,
      nome: "Sala AF",
      descricao: "Geografia física e ambiental",
      materia: "Geografia",
      professor: "Prof. Pedro",
    },
    {
      id: 32,
      nome: "Sala AG",
      descricao: "Estudo prático de Informática",
      materia: "Informática",
      professor: "Prof. Rafael",
    },
    {
      id: 33,
      nome: "Sala AH",
      descricao: "Oficina de teatro em Inglês",
      materia: "Inglês",
      professor: "Prof. Paula",
    },
    {
      id: 34,
      nome: "Sala AI",
      descricao: "Sala de Matemática aplicada",
      materia: "Matemática",
      professor: "Prof. João",
    },
    {
      id: 35,
      nome: "Sala AJ",
      descricao: "Laboratório de Física quântica",
      materia: "Física",
      professor: "Prof. Ana",
    },
    {
      id: 36,
      nome: "Sala AK",
      descricao: "Estudo de ciências naturais",
      materia: "Ciências",
      professor: "Prof. Maria",
    },
    {
      id: 37,
      nome: "Sala AL",
      descricao: "Curso intensivo de Química",
      materia: "Química",
      professor: "Prof. Carlos",
    },
    {
      id: 38,
      nome: "Sala AM",
      descricao: "Aula prática de Biologia",
      materia: "Biologia",
      professor: "Prof. Laura",
    },
    {
      id: 39,
      nome: "Sala AN",
      descricao: "Sala de Geografia política",
      materia: "Geografia",
      professor: "Prof. Pedro",
    },
    {
      id: 40,
      nome: "Sala AO",
      descricao: "História medieval",
      materia: "História",
      professor: "Prof. Sofia",
    },
    {
      id: 41,
      nome: "Sala AP",
      descricao: "Redação e interpretação textual",
      materia: "Português",
      professor: "Prof. Lucas",
    },
    {
      id: 42,
      nome: "Sala AQ",
      descricao: "Estudo de Física experimental",
      materia: "Física",
      professor: "Prof. Ana",
    },
    {
      id: 43,
      nome: "Sala AR",
      descricao: "Laboratório de Ciências exatas",
      materia: "Ciências",
      professor: "Prof. Maria",
    },
    {
      id: 44,
      nome: "Sala AS",
      descricao: "Sala de Inglês avançado",
      materia: "Inglês",
      professor: "Prof. Paula",
    },
    {
      id: 45,
      nome: "Sala AT",
      descricao: "Espaço para Matemática básica",
      materia: "Matemática",
      professor: "Prof. João",
    },
    {
      id: 46,
      nome: "Sala AU",
      descricao: "Estudo de Química industrial",
      materia: "Química",
      professor: "Prof. Carlos",
    },
    {
      id: 47,
      nome: "Sala AV",
      descricao: "Aula de Biologia marinha",
      materia: "Biologia",
      professor: "Prof. Laura",
    },
    {
      id: 48,
      nome: "Sala AW",
      descricao: "Laboratório de Geografia aplicada",
      materia: "Geografia",
      professor: "Prof. Pedro",
    },
    {
      id: 49,
      nome: "Sala AD",
      descricao: "Aula de Química orgânica",
      materia: "Química",
      professor: "Prof. Carlos",
    },
  ].filter((sala) => !existingSalaDeAula.some((s) => s.nome === sala.nome));

  if (salasDeAulaToCreate.length) {
    for (const sala of salasDeAulaToCreate) {
      const createdSala = await prisma.sala_de_aula.create({
        data: {
          nome: sala.nome,
          descricao: sala.descricao,
          materia: sala.materia,
          professor: sala.professor,
        },
      });

      console.log(`Sala ${sala.nome} inserida com sucesso!`);

      const materiasDaAula = [
        {
          materia: sala.materia,
          descricao: `Introdução à ${sala.materia}, cobrindo conceitos básicos e práticas iniciais.`,
          sala_de_aulaId: createdSala.id,
          data: new Date(),
        },
        {
          materia: sala.materia,
          descricao: `Aprofundamento em ${sala.materia}, com foco em resolução de problemas e aplicações práticas.`,
          sala_de_aulaId: createdSala.id,
          data: new Date(new Date().setDate(new Date().getDate() + 7)),
        },
      ];

      for (const materia of materiasDaAula) {
        await prisma.materia_da_aula.create({
          data: materia,
        });
        console.log(
          `Matéria da aula de ${materia.materia} criada para a sala ${createdSala.nome}!`
        );
      }
    }
  }

  console.log("Seeds inseridos com sucesso!");
}

module.exports = salasSeed;
