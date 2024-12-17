"use client";

import React from "react";
import InputRegisterForm from "./InputRegisterForm";
import Button from "./Button";
import { useAuth } from "@/data/contexts/AuthContext";

interface FormRegisterProps {
  setActiveForm: (form: "login" | "register" | "recovery") => void;
}

const FormRegister = ({ setActiveForm }: FormRegisterProps) => {
  const {
    nome,
    setNome,
    email,
    setEmail,
    password,
    setPassword,
    handleRegister,
  } = useAuth();

  return (
    <div className="bg-[#18181B] w-[631px] h-[776px] justify-center items-center flex flex-col gap-5 rounded-lg">
      <div className="w-[486px] h-[35px] justify-center items-center flex ">
        <span className="font-bold text-xl">Cadastrar</span>
      </div>

      <div className="flex flex-col gap-5 w-[494px] h-[478px]">
        <InputRegisterForm
          label="Nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <InputRegisterForm
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputRegisterForm
          label="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputRegisterForm label="Confirme a Senha" type="password" />
        <InputRegisterForm label="Telefone" type="tel" />
      </div>

      <div className="w-[494px] h-[103px] flex flex-col gap-5 justify-center items-center">
        <Button
          cor="verde"
          onClick={() =>
            handleRegister("TOLO5", "amor23rrd2SZzz@gmail.com", "TOLO")
          }
        >
          Cadastrar-se
        </Button>
        <span>
          Já possui conta?{" "}
          <button
            className="text-[#22C55E]"
            onClick={() => setActiveForm("login")}
          >
            Faça Login
          </button>
        </span>
      </div>
    </div>
  );
};

export default FormRegister;
