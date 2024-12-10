import React from "react";
import InputLoginForm from "./InputLoginForm";
import InputRegisterForm from "./InputRegisterForm";
import Button from "./Button";
import Link from "next/link";

const FormRegister = () => {
  return (
    <div className="bg-[#18181B] w-[631px] h-[776px] justify-center items-center flex flex-col gap-5 rounded-lg">
      <div className="w-[486px] h-[35px] justify-center items-center flex ">
        <span className="font-bold text-xl">Cadastrar</span>
      </div>

      <div className="flex flex-col gap-5 w-[494px] h-[478px]">
        <InputRegisterForm texto="Nome" />
        <InputRegisterForm texto="Email" />
        <InputRegisterForm texto="Senha" />
        <InputRegisterForm texto="Senha" />
        <InputRegisterForm />
      </div>
      <div className="w-[494px] h-[103px] flex flex-col gap-5 justify-center items-center">
        <Button cor="verde">Cadastrar-se</Button>
        <span>
          Já possui conta?{" "}
          <Link href={"#"} className="text-[#22C55E]">
            Faça Login
          </Link>
        </span>
      </div>
    </div>
  );
};

export default FormRegister;
