import React from "react";

interface InputRegisterFormProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  texto?: string;
}

const InputRegisterForm = ({ texto, ...props }: InputRegisterFormProps) => {
  return (
    <div className="flex flex-col">
      <span>{texto ?? "\u00A0"}</span>

      <input type="text" className="bg-[#09090B] rounded-md h-[52px] p-2" />
    </div>
  );
};

export default InputRegisterForm;
