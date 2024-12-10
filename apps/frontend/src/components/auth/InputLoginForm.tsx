"use client";

import React, { HTMLAttributes, HtmlHTMLAttributes, useEffect } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

interface InputFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
  texto?: string;
  className?: string;
  showPassword?: boolean;
  changeShowPassword?: () => void;
}

const InputLoginForm = ({
  texto,
  className,
  type,
  showPassword,
  changeShowPassword,
  ...props
}: InputFormProps) => {
  useEffect(() => {
    console.log("showPassword updated:", showPassword);
  }, [showPassword]);

  return (
    <div className="flex flex-col gap-2">
      <span className="text-[18px]">{texto}</span>
      <div className="flex  relative">
        <input
          {...props}
          type={type === "password" && showPassword ? "text" : type}
          className={`
        ${className ?? ""}
        bg-bg-1-black border border-border-1-gray h-[52px] rounded-xl flex-1 px-2 
        `}
        />
        {type === "password" && (
          <button
            className="absolute right-1 top-1/2 -translate-y-1/2  w-12 h-12 bg-bg-1-black"
            onClick={changeShowPassword}
          >
            {showPassword ? (
              <VisibilityIcon className="text-[#27272A]" />
            ) : (
              <VisibilityOffIcon className="text-[#27272A]" />
            )}
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

export default InputLoginForm;
