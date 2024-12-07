import React, { HtmlHTMLAttributes } from "react";

interface InputFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  className?: string;
}

const InputForm = ({ title, className, ...props }: InputFormProps) => {
  return (
    <div>
      <label>{title}</label>
      <input
        {...props}
        className={`${className ?? ""} bg-transparent border border-zinc-500 rounded-md focus:outline-none p-2 w-full h-10`}
      />
    </div>
  );
};

export default InputForm;
