"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { notifyError, notifySuccess } from "@/app/services/toast";
import api from "@/app/services/api";
import Card from "@/app/components/card";
import { withAuth } from "@/app/hoc/withAuth";
import Button from "@/app/components/button";
import ModalClassroom from "@/app/components/modal/classroom";

interface Classe {
  id: number;
  nome: string;
  descricao: string;
  materia: string;
}

function ClassroomsPage() {
  const [classes, setClasses] = useState<Classe[]>([]);
  const [showModal, setShowModal] = useState<number | boolean>(false);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn") || "false");

  const groupedClasses = useMemo(() => {
    return classes.reduce((acc, classe) => {
      if (!acc[classe.materia]) {
        acc[classe.materia] = [];
      }
      acc[classe.materia].push(classe);
      return acc;
    }, {} as Record<string, Classe[]>);
  }, [classes]);

  async function fetchClasses() {
    try {
      const response = await api.get("/classes");
      if (!response.data.length) {
        throw new Error("Nenhuma sala cadastrada.");
      }
      const classes = response.data.sort((a: Classe, b: Classe) =>
        a.materia.localeCompare(b.materia)
      );
      setClasses(classes);
    } catch (e: any) {
      notifyError(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchClasses();
  }, [showModal, isLoggedIn, router]);

  const handleEditClass = (id: number) => {
    setShowModal(id);
  };

  const handleRemoveClass = (id: number) => {
    setClasses((prevClasses) =>
      prevClasses.filter((classe) => classe.id !== id)
    );
  };

  const handleDeleteAll = async (e: React.MouseEvent, materia: string) => {
    e.preventDefault();
    e.stopPropagation();
    const userConfirmed = window.confirm(
      `Tem certeza de que deseja deletar todas as salas de ${materia}? Essa ação não pode ser desfeita.`
    );

    if (!userConfirmed) {
      return;
    }

    try {
      await api.delete(`/allclasses/${materia}`);
      fetchClasses();

      notifySuccess(
        `Todas as salas de ${materia} foram deletadas com sucesso!`
      );
    } catch (error: any) {
      console.error(error);

      notifyError(error);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full max-h-full px-10 pt-5 overflow-hidden">
      <Button
        text="Sair"
        onClick={() => {
          localStorage.setItem("isLoggedIn", "false");
          router.push("/");
        }}
        variant="secondary"
      />
      <div className="flex flex-col justify-between items-center">
        <h1 className="text-2xl font-bold mb-4">Salas de Aula</h1>

        <div className="flex gap-4">
          <Button
            text="Cadastrar Sala"
            onClick={() => setShowModal(true)}
            variant="primary"
          />
        </div>
      </div>
      {loading && <p className="mt-4">Carregando...</p>}
      {!loading && classes.length === 0 && (
        <p className="mt-4">Nenhuma sala cadastrada.</p>
      )}
      <div className="flex gap-10 h-full overflow-y-auto">
        {!loading &&
          Object.keys(groupedClasses).map((materia) => (
            <div className="flex flex-col h-full" key={materia}>
              <h2 className="bg-green-600 text-white px-4 py-2 text-xl font-semibold mt-6 text-center">
                {materia}
              </h2>
              <Button
                text="Deletar todas"
                onClick={(e) =>
                  handleDeleteAll(
                    e,
                    materia
                      .toLowerCase()
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                  )
                }
                variant="Delete"
              />
              <div className="flex flex-col gap-6 w-64 overflow-y-auto max-h-full">
                {groupedClasses[materia].map((classe) => (
                  <Card
                    key={classe.id}
                    classe={classe}
                    onDelete={handleRemoveClass}
                    handleEdit={handleEditClass}
                  />
                ))}
              </div>
            </div>
          ))}
      </div>
      {showModal && (
        <ModalClassroom id={showModal} setShowModal={setShowModal} />
      )}
    </div>
  );
}

export default withAuth(ClassroomsPage);
