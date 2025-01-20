"use client";

import { CardProps } from "../../interface/interface";
import api from "../../services/api";
import { notifyError, notifySuccess } from "../../services/toast";
import Link from "next/link";
import Button from "../button";
import { useState } from "react";

function Card({
  classe,
  onDelete,
  handleEdit,
}: {
  classe: CardProps;
  onDelete: (id: number) => void;
  handleEdit: (id: number) => void;
}) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await api.delete(`/classes/${classe.id}`);
      notifySuccess("Sala deletada com sucesso!");
      onDelete(classe.id);
    } catch (error: any) {
      console.log(error);
      notifyError(error.message);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow-md w-full flex justify-between flex-col gap-2">
      <div>
        <h2 className="text-lg font-bold">
          <strong>Nome: </strong> {classe.nome}
        </h2>
        <p>
          <strong>Descrição:</strong> {classe.descricao}
        </p>
        <p>
          <strong>Matéria:</strong> {classe.materia}
        </p>
      </div>
      <Link
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
        href={`/classrooms/${classe.id}`}
      >
        Ver detalhes
      </Link>
      <div className="flex justify-center items-center gap-4">
        <Button
          text="Editar"
          variant="primary"
          onClick={() => handleEdit(classe.id)}
        />
        <Button
          text={isDeleting ? "Deletando..." : "Deletar"}
          onClick={handleDelete}
          variant="Delete"
          disabled={isDeleting}
        />
      </div>
    </div>
  );
}

export default Card;
