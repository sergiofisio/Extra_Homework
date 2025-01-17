"use client";

import Button from "./components/button";
import Form from "./components/form";
import { useRouter } from "next/navigation";
import { notifyError } from "./services/toast";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e: React.FormEvent) => {
    console.log("form", form);

    e.preventDefault();

    try {
      if (!form.email || !form.password) {
        throw new Error("Preencha todos os campos.");
      }

      router.push("/classrooms");
    } catch (error: any) {
      notifyError(error.message);
    }
  };
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form>
        <Form
          id="email"
          label="Email"
          type="email"
          value={form.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setForm({ ...form, email: e.target.value });
          }}
        />
        <Form
          id="password"
          label="Senha"
          type="password"
          value={form.password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setForm({ ...form, password: e.target.value });
          }}
        />
        <Button onClick={handleLogin}>Entrar</Button>
      </form>
    </div>
  );
}
