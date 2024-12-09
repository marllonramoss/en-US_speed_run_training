import Image from "next/image";
import React from "react";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return <Image src="/LogoSecurity.svg" alt="Logo" width={89} height={88} />;
};

export default Logo;
