"use client";

import { CardProps } from "@/app/interface/interface";
import api from "@/app/services/api";
import { notifyError, notifySuccess } from "@/app/services/toast";
import Link from "next/link";
import React from "react";
import Button from "../button";

function Card({
  classe,
  onDelete,
}: {
  classe: CardProps;
  onDelete: (id: number) => void;
}) {
  const handleDelete = async () => {
    try {
      await api.delete(`/classes/${classe.id}`);
      notifySuccess("Sala deletada com sucesso!");
      onDelete(classe.id);
    } catch (error: any) {
      console.log(error);
      notifyError(error.message);
    }
  };
  return (
    <div className="bg-white p-4 rounded shadow-md max-w-[50%] w-60 min-h-48 flex justify-between flex-col gap-2">
      <div>
        <h2 className="text-lg font-bold">
          <strong>Nome da Classe: </strong> {classe.nome}
        </h2>
        <p>
          <strong>Descrição:</strong> {classe.descricao}
        </p>
        <p>
          <strong>Matéria:</strong> {classe.materia}
        </p>
      </div>
      <div className="flex justify-center items-center gap-4">
        <Link
          href={`/classrooms/${classe.id}`}
          className="text-blue-600 hover:underline"
        >
          Editar
        </Link>
        <Button onClick={handleDelete} variant="Delete">
          Deletar
        </Button>
      </div>
    </div>
  );
}

export default Card;
