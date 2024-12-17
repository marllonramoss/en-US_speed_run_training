import React from "react";
import DrawIcon from "@mui/icons-material/Draw";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HttpsIcon from "@mui/icons-material/Https";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

interface InputRegisterFormProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const InputRegisterForm = ({
  label,
  type,
  onChange,
  ...props
}: InputRegisterFormProps) => {
  return (
    <div className="flex flex-col">
      <span>{label ?? "\u00A0"}</span>
      <div className="flex relative w-full ">
        <input
          type={type}
          className="bg-[#09090B] rounded-md h-[52px] p-2 w-full pl-12 flex focus:outline-none"
          onChange={onChange}
        />
        {type === "text" && (
          <button className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 text-[#A1A1AA] cursor-default">
            <DrawIcon />
          </button>
        )}
        {type === "email" && (
          <button className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 text-[#A1A1AA] cursor-default">
            <MailOutlineIcon />
          </button>
        )}
        {type === "password" && (
          <button className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 text-[#A1A1AA] cursor-default">
            <HttpsIcon />
          </button>
        )}
        {type === "tel" && (
          <button className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 text-[#A1A1AA] cursor-default">
            <LocalPhoneIcon />
          </button>
        )}
      </div>
    </div>
  );
};

export default InputRegisterForm;
