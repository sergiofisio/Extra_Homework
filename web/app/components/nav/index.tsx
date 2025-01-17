import React from "react";

const Nav: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Sistema de Salas</h1>
        <nav>
          <a href="/" className="mx-2 hover:underline">
            Login
          </a>
          <a href="/classrooms" className="mx-2 hover:underline">
            Salas
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
