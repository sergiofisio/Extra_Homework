"use client";

import React, { useEffect, useState } from "react";
import api from "@/app/services/api";
import { notifyError, notifySuccess } from "@/app/services/toast";
import Input from "@/app/components/input";
import Button from "@/app/components/button";

const materias = [
  "Biologia",
  "Ciências",
  "Filosofia",
  "Física",
  "Geografia",
  "História",
  "Informática",
  "Inglês",
  "Matemática",
  "Português",
  "Química",
  "Sociologia",
];

export default function ModalClassroom({
  id,
  setShowModal,
}: {
  id?: number | boolean;
  setShowModal: React.Dispatch<React.SetStateAction<number | boolean>>;
}) {
  const [form, setForm] = useState({
    nome: "",
    descricao: "",
    materia: "",
    professor: "",
  });

  useEffect(() => {
    if (typeof id === "number") {
      api
        .get(`/classe/${id}`)
        .then((response) => setForm(response.data))
        .catch(() => notifyError("Erro ao carregar os dados da sala."));
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (typeof id === "number") {
        await api.put(`/classes/${id}`, { ...form });
        notifySuccess("Sala atualizada com sucesso!");
        setShowModal(false);
        return;
      }
      await api.post("/classes", { ...form });
      notifySuccess("Sala criada com sucesso!");
      setShowModal(false);
    } catch (error: any) {
      console.error(error);

      notifyError(error.message);
    }
  };

  return (
    <div className="absolute top-0 right-0 flex flex-col items-center justify-center w-full h-full bg-gray-500 bg-opacity-40">
      <form
        className="bg-white w-1/4 flex flex-col items-center justify-center gap-4 p-5 rounded-lg relative"
        onSubmit={handleSubmit}
      >
        <h2
          className="absolute top-2 right-2 cursor-pointer"
          onClick={() => setShowModal(false)}
        >
          X
        </h2>
        <h1 className="text-2xl font-bold mb-4">Cadastrar Sala</h1>

        <Input
          type="text"
          id="name"
          label="Nome"
          placeholder="Nome"
          value={form.nome}
          acao={(e) => {
            setForm({ ...form, nome: e.target.value });
          }}
        />
        <Input
          type="text"
          id="description"
          label="Descrição"
          placeholder="Descrição"
          value={form.descricao}
          acao={(e) => {
            setForm({ ...form, descricao: e.target.value });
          }}
        />
        <div className="w-full">
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700"
          >
            Matéria
          </label>
          <select
            id="subject"
            value={form.materia}
            onChange={(e) => {
              const value = e.target.value;

              setForm({ ...form, materia: value });
            }}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="">Selecione uma matéria</option>
            {materias.map((subject, index) => (
              <option key={index} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>
        <Input
          type="text"
          id="professor"
          label="Professor"
          placeholder="Professor"
          value={form.professor}
          acao={(e) => {
            setForm({ ...form, professor: e.target.value });
          }}
        />
        <Button text="Cadastrar" variant="primary" onClick={handleSubmit} />
      </form>
    </div>
  );
}
