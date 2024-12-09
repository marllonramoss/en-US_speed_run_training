import React, { HtmlHTMLAttributes } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  cor?: "azul" | "verde" | "vermelho" | "preto";
}

const Button = ({
  children,
  onClick,
  cor = "preto",
  ...props
}: ButtonProps) => {
  const corClasse =
    cor === "azul"
      ? "bg-button-1-blue hover:bg-button-1-blue-hover text-white"
      : cor === "verde"
        ? "bg-button-2-green hover:bg-button-2-green-hover text-white"
        : cor === "vermelho"
          ? "bg-button-3-red hover:bg-button-3-red-hover text-white"
          : "bg-button-4-black hover:bg-button-4-black-hover text-white";

  return (
    <button
      {...props}
      className={`
    w-full h-[52px] ${corClasse} rounded-xl font-bold text-xl

    `}
    >
      {children}
    </button>
  );
};

export default Button;
