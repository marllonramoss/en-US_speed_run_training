"use client";

import FormLogin from "@/components/auth/FormLogin";
import FormRegister from "@/components/auth/FormRegister";
import FormRecovery from "@/components/auth/FormRecovery";
import { useAuth } from "@/data/contexts/AuthContext";
import React from "react";

const page = () => {
  const { activeForm, setActiveForm } = useAuth();

  return (
    <div className="flex justify-center h-full items-center">
      {activeForm === "login" && <FormLogin setActiveForm={setActiveForm} />}
      {activeForm === "register" && (
        <FormRegister setActiveForm={setActiveForm} />
      )}
      {activeForm === "recovery" && <FormRecovery />}
    </div>
  );
};

export default page;
