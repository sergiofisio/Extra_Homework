"use client";

import { useEffect, useState } from "react";
import api from "../services/api";
import { notifyError } from "../services/toast";
import Card from "./../components/card/index";
import Link from "next/link";

interface Classe {
  id: number;
  nome: string;
  descricao: string;
  materia: string;
}

export default function ClassroomsPage() {
  const [classes, setClasses] = useState<Classe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/classes")
      .then((response) => setClasses(response.data))
      .catch(() => notifyError("Erro ao carregar salas!"))
      .finally(() => setLoading(false));
  }, []);

  const handleRemoveClass = (id: number) => {
    setClasses((prevClasses) =>
      prevClasses.filter((classe) => classe.id !== id)
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold mb-4">Salas de Aula</h1>
      <Link
        href="/classrooms/create"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-32 text-center"
      >
        Nova Sala
      </Link>
      {loading && <p className="mt-4">Carregando...</p>}
      {!loading && classes.length === 0 && (
        <p className="mt-4">Nenhuma sala cadastrada.</p>
      )}
      <div className="flex gap-10 justify-center items-center flex-wrap">
        {classes.map((classe) => (
          <Card key={classe.id} classe={classe} onDelete={handleRemoveClass} />
        ))}
      </div>
    </div>
  );
}
