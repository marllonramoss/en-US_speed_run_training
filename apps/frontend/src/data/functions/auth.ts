import axios from "axios";

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

// Função para loginf
export const login = async ({ email, password }: LoginData) => {
  try {
    const response = await axios.post("http://localhost:3000/auth/login", {
      email,
      password,
    });
    const { accessToken } = response.data;
    // Aqui você pode armazenar o token, por exemplo, no localStorage
    localStorage.setItem("accessToken", accessToken);
    console.log("Login bem-sucedido");
    return accessToken; // Retorna o token ou outro dado relevante
  } catch (error) {
    console.error("Erro ao realizar login:", error);
    throw error; // Lança o erro para ser tratado no componente
  }
};

// Função para registro (cadastro)
export const register = async ({ email, name, password }: RegisterData) => {
  try {
    const response = await axios.post("http://localhost:3000/auth/registrar", {
      name,
      email,
      password,
    });
    console.log("Usuário registrado com sucesso");
    return response.data; // Pode retornar os dados do usuário registrado ou outro valor
  } catch (error) {
    console.error("Erro ao registrar usuário:", error);
    throw error; // Lança o erro para ser tratado no componente
  }
};
