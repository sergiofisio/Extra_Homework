"use client";

import Button from "./components/button";
import { useRouter } from "next/navigation";
import { notifyError } from "./services/toast";
import { useState } from "react";
import Input from "./components/input";
import { verify } from "./utils/verify";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      verify("Email", form.email);
      verify("password", form.password);

      setIsLoading(true);
      localStorage.setItem("isLoggedIn", "true");
      router.push("/classrooms");
    } catch (error: any) {
      notifyError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="bg-white text-gray-900 p-6 rounded shadow-md w-full max-w-xl flex flex-col gap-4 items-center justify-center"
      onSubmit={handleLogin}
    >
      <h1 className="text-4xl font-bold">Bem-vindo ao Sistema de Salas</h1>
      <h2 className="text-2xl font-bold">Entre com suas credenciais:</h2>
      <Input
        id="email"
        label="Email"
        placeholder="Email"
        type="email"
        value={form.email}
        acao={(e: React.ChangeEvent<HTMLInputElement>) => {
          setForm({ ...form, email: e.target.value });
        }}
      />
      <Input
        password={true}
        id="password"
        label="Senha"
        placeholder="Senha"
        type="password"
        value={form.password}
        acao={(e: React.ChangeEvent<HTMLInputElement>) => {
          setForm({ ...form, password: e.target.value });
        }}
      />
      <Button
        text={isLoading ? "Carregando..." : "Entrar"}
        variant="primary"
        onClick={handleLogin}
      />
    </form>
  );
}
