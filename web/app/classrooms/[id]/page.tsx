"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import api from "@/app/services/api";
import { notifyError, notifySuccess } from "@/app/services/toast";
import Form from "@/app/components/form";
import Button from "@/app/components/button";

export default function EditClassroomPage() {
  const [classeInfo, setClasseInfo] = useState({
    nome: "",
    descricao: "",
    materia: "",
  });
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    console.log({ id });
    if (id) {
      api
        .get(`/classe/${id}`)
        .then((response) => {
          console.log(response.data);

          setClasseInfo(response.data);
        })
        .catch(() => notifyError("Erro ao carregar os dados da sala."));
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.put(`/classes/${id}`, { ...classeInfo });
      notifySuccess("Sala atualizada com sucesso!");
      router.push("/classrooms");
    } catch {
      notifyError("Erro ao atualizar a sala.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">Editar Sala</h1>
      <form onSubmit={handleSubmit}>
        <Form
          id="name"
          label="Nome"
          value={classeInfo.nome}
          onChange={(e) => {
            setClasseInfo({ ...classeInfo, nome: e.target.value });
          }}
        />
        <Form
          id="description"
          label="Descrição"
          value={classeInfo.descricao}
          onChange={(e) => {
            setClasseInfo({ ...classeInfo, descricao: e.target.value });
          }}
        />
        <Form
          id="subject"
          label="Matéria"
          value={classeInfo.materia}
          onChange={(e) => {
            setClasseInfo({ ...classeInfo, materia: e.target.value });
          }}
        />
        <Button>Atualizar</Button>
      </form>
    </div>
  );
}
