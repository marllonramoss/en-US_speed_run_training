import React from "react";
import InputForm from "./InputForm";

const LoginFormAuth = () => {
  return (
    <div
      className={`
    bg-zinc-800
    flex flex-col p-4 gap-5 justify-center items-center rounded-lg
    w-72

    `}
    >
      <span className="text-3xl font-bold">Login</span>

      <div className="flex flex-col gap-5">
        <InputForm title="E-mail" />
        <InputForm title="Password" />
      </div>
    </div>
  );
};

export default LoginFormAuth;
