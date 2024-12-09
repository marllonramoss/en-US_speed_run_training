import React from "react";
import Logo from "./Logo";
import { Quantico } from "next/font/google";

const quantico = Quantico({
  subsets: ["latin"],
  weight: ["700"],
});

const LogoLogin = () => {
  return (
    <div className="flex flex-col justify-center items-center  w-[201px] h-[148px]">
      <Logo />
      <div className="flex w-[201px] h-[77px] justify-center items-center -mt-5">
        <span className={`${quantico.className} uppercase text-xl`}>
          s<span className="text-logo-red">3</span>curity
        </span>
      </div>
    </div>
  );
};

export default LogoLogin;
