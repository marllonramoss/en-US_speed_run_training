import React from "react";
import Button from "./Button";
import InputLoginForm from "./InputLoginForm";

const FormRecovery = () => {
  return (
    <div className="w-[631px] h-[339px] bg-[#18181B] rounded-xl flex flex-col justify-center items-center gap-5">
      <span className="font-bold text-xl">Solicitar troca de senha</span>
      <div className="w-[494px] h-[159px] flex flex-col gap-6">
        <InputLoginForm texto="Email" type="email" />
        <Button cor="verde">Enviar</Button>
      </div>
    </div>
  );
};

export default FormRecovery;
