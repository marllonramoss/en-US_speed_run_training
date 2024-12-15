// src/auth/jwt-payload.interface.ts
export interface JwtPayload {
    email: string;
    sub: string; // O "sub" normalmente é o ID do usuário
}
