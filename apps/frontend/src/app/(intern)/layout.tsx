import { AuthProvider } from "@/data/contexts/AuthContext";
import React from "react";

interface layoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: layoutProps) => {
  return (
    <div className="layoutBoxed h-screen">
      <AuthProvider>{children}</AuthProvider>
    </div>
  );
};

export default layout;
