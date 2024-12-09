import React, { HTMLAttributes, HtmlHTMLAttributes } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

interface InputFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
  texto?: string;
  className?: string;
  showPassword?: () => void;
}

const InputForm = ({ texto, className, type, ...props }: InputFormProps) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[18px]">{texto}</span>
      <div className="flex  relative">
        <input
          {...props}
          className={`
        ${className ?? ""}
        bg-bg-1-black border border-border-1-gray h-[52px] rounded-xl flex-1 px-2 
        `}
        />
        {type === "password" && (
          <button className="absolute right-1 top-1/2 -translate-y-1/2  w-12 h-12 bg-bg-1-black">
            <RemoveRedEyeIcon className="text-[#27272A]" />
          </button>
        )}
        {type === "email" && (
          <button className="absolute right-1 top-1/2 -translate-y-1/2  w-12 h-12 bg-bg-1-black cursor-default">
            <MailOutlineIcon className="text-[#A1A1AA]" />
          </button>
        )}
      </div>
    </div>
  );
};

export default InputForm;
