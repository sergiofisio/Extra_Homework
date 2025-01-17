"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/app/services/api";
import { notifyError, notifySuccess } from "@/app/services/toast";

export default function CreateClassroomPage() {
  const [form, setForm] = useState({
    nome: "",
    descricao: "",
    materia: "",
  });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post("/classes", { ...form });
      notifySuccess("Sala criada com sucesso!");
      router.push("/classrooms");
    } catch {
      notifyError("Erro ao criar a sala!");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">Cadastrar Sala</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Nome
          </label>
          <input
            type="text"
            id="name"
            value={form.nome}
            onChange={(e) => {
              setForm({ ...form, nome: e.target.value });
            }}
            className="w-full border-gray-300 rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Descrição
          </label>
          <input
            type="text"
            id="description"
            value={form.descricao}
            onChange={(e) => {
              setForm({ ...form, descricao: e.target.value });
            }}
            className="w-full border-gray-300 rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700"
          >
            Matéria
          </label>
          <input
            type="text"
            id="subject"
            value={form.materia}
            onChange={(e) => {
              setForm({ ...form, materia: e.target.value });
            }}
            className="w-full border-gray-300 rounded p-2"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
