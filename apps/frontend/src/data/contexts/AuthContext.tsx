"use client";

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface AuthContextType {
  activeForm: "login" | "register" | "recovery";
  setActiveForm: (form: "login" | "register" | "recovery") => void;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  handleLogin: (email: string, password: string) => void;
  nome: string;
  setNome: React.Dispatch<React.SetStateAction<string>>;
  confirmPassword: string;
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
  handleRegister: (nome: string, email: string, password: string) => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [activeForm, setActiveForm] = useState<
    "login" | "register" | "recovery"
  >("login");

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [nome, setNome] = useState<string>("");

  const router = useRouter();

  const handleLogin = async (email: string, password: string) => {
    console.log("Tentando fazer login com", email, password);

    try {
      const response = await axios.post("http://localhost:4000/auth/login", {
        email,
        password,
      });

      if (response.status === 201) {
        console.log("Login bem sucedido", response.data);
        router.push("/dashboard");
      } else {
        console.log("Falha no login", response.data);
      }
    } catch (error) {
      console.log("Erro na autenticacao - Login", error);
    }
  };

  const handleRegister = async (
    nome: string,
    email: string,
    password: string
  ) => {
    console.log("Tentando fazer cadastro com:");
    console.log(nome, email, password);

    try {
      const response = await axios.post(
        "http://localhost:4000/auth/registrar",
        {
          name: nome,
          email: email,
          password: password,
        }
      );
      console.log("Cadastro feito!");
    } catch (error) {
      console.log("Erro na autenticacao - Registro");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        activeForm,
        setActiveForm,
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        nome,
        setNome,
        handleRegister,
        confirmPassword,
        setConfirmPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
