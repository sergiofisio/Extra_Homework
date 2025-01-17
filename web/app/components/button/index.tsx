"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  href?: string;
  variant?: "primary" | "secondary" | "Delete";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  variant,
}) => {
  const className =
    variant === "primary"
      ? "bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      : variant === "Delete"
      ? "bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      : "bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700";

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
