"use client";

import React, { useEffect } from "react";
import Logo from "../shared/Logo";
import LogoLogin from "../shared/LogoLogin";
import InputForm from "./InputLoginForm";
import Button from "./Button";
import GoogleIcon from "@mui/icons-material/Google";
import Link from "next/link";
import { useAuth } from "@/data/contexts/AuthContext";

interface FormLoginProps {
  setActiveForm: (form: "login" | "register" | "recovery") => void;
}

const FormLogin = ({ setActiveForm }: FormLoginProps) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const changeShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const { email, setEmail, password, setPassword, handleLogin } = useAuth();

  return (
    <div className="flex flex-col justify-start items-center  w-[631px] h-[748px] bg-bg-2-lightBlack rounded-xl p-8 ">
      <LogoLogin />
      <div className="flex flex-col gap-5 justify-center items-center  ">
        <span className="font-bold text-2xl">Entre com sua conta</span>
        <div className=" w-[494px] flex flex-col gap-2">
          <InputForm
            texto="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputForm
            texto="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            showPassword={showPassword}
            changeShowPassword={changeShowPassword}
          />
        </div>
        <div className="flex justify-end  flex-1 w-full h-full">
          <Link href={"#"}>
            <span
              className="text-[#979797] hover:brightness-150"
              onClick={() => setActiveForm("recovery")}
            >
              Esqueceu a senha?
            </span>
          </Link>
        </div>
        <Button cor="verde" onClick={() => handleLogin(email, password)}>
          Login
        </Button>
        <span>ou</span>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="bg-logo-red rounded-full w-[61px] h-[60px] flex justify-center items-center">
            <GoogleIcon />
          </div>
          <div className="flex flex-col text-center gap-1">
            <span className="text-xl">
              Ainda não possui conta?{" "}
              <span className="text-[#22C55E]">
                Cadastre-se{" "}
                <button
                  className="linkStyled"
                  onClick={() => setActiveForm("register")}
                >
                  Aqui
                </button>
              </span>
            </span>
            <span className="text-[#A1A1AA] text-[15px]">
              ou faça login pelo Google clicando no G acima.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
