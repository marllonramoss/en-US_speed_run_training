import React from "react";

interface layoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: layoutProps) => {
  return <div className="layoutBoxed h-screen">{children}</div>;
};

export default layout;
