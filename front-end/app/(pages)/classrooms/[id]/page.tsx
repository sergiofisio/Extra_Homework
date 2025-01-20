"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import api from "@/app/services/api";
import { notifyError, notifySuccess } from "@/app/services/toast";
import { withAuth } from "@/app/hoc/withAuth";
import Button from "@/app/components/button";

function EditClassroomPage() {
  const [classeInfo, setClasseInfo] = useState({
    nome: "",
    professor: "",
    descricao: "",
    materia: "",
    materias: [],
  });
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  useEffect(() => {
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
    <div className="w-full h-full min-h-screen mx-auto  p-6 rounded shadow-md">
      <Button text="Voltar" onClick={() => router.push("/classrooms")} />
      <h1 className="text-2xl font-bold mb-4">{classeInfo.nome}</h1>
      <h1 className="text-7xl">{`${classeInfo.materia} - ${classeInfo.descricao}`}</h1>
      <h1 className="text-4xl">{classeInfo.professor}</h1>
      <div className="flex items-center justify-center gap-4">
        {classeInfo.materias.map(({ id, descricao, data }) => {
          return (
            <div
              className="bg-white h-80 w-60 p-4 rounded-3xl flex flex-col items-center justify-between"
              key={id}
            >
              <h1 className="flex flex-col gap-2">
                <strong>Conteúdo: </strong>
                {descricao}
              </h1>
              <h1 className="flex gap-2">
                <strong>Data:</strong>
                {new Date(data).toLocaleDateString()}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default withAuth(EditClassroomPage);
