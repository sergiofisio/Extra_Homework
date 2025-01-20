"use client";

import openedEye from "@/public/assets/openedEye.svg";
import closedEye from "@/public/assets/closedEye.svg";
import { InputProps } from "@/app/interface/interface";
import { useState } from "react";
import Image from "next/image";

const Input: React.FC<InputProps> = ({
  password = false,
  id,
  type,
  label,
  value = "",
  acao,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={id}>{label}</label>
      <div className="relative flex items-center w-full h-12 rounded-xl py-1 px-3 border-black border-solid border-2">
        <input
          id={id}
          className="w-full border-none font-main text-base font-normal text-black focus:outline-none text-center"
          type={type === "password" && showPassword ? "text" : type}
          value={value}
          onChange={acao}
        />
        {password && (
          <Image
            src={showPassword ? openedEye : closedEye}
            className={`absolute right-2 top-auto cursor-pointer ${
              showPassword ? "" : "olho-fechado"
            }`}
            onClick={handleShowPassword}
            alt="ícone que habilita visibilidade da senha."
          />
        )}
      </div>
    </div>
  );
};

export default Input;
