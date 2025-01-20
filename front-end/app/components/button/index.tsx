"use client";

import React from "react";

interface ButtonProps {
  text: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  href?: string;
  variant?: "primary" | "secondary" | "Delete";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  href,
  variant,
  disabled,
}) => {
  const className =
    variant === "primary"
      ? "bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      : variant === "Delete"
      ? "bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      : "bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 absolute top-4 right-4";

  if (href) {
    return (
      <a href={href} className={className}>
        {text}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
