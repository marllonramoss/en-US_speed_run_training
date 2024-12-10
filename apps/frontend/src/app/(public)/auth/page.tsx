import FormLogin from "@/components/auth/FormLogin";
import FormRegister from "@/components/auth/FormRegister";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center h-full items-center">
      {/* <FormLogin /> */}
      <FormRegister />
    </div>
  );
};

export default page;
