// src/auth/jwt-strategy.provider.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from './jwt-payload.interface'; // Importando a interface correta

@Injectable()
export class JwtStrategyProvider extends PassportStrategy(Strategy) {
    constructor() {
        super({
            secretOrKey: 'secret', // Em um ambiente real, você usaria algo como process.env.JWT_SECRET
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extrai o JWT do cabeçalho Authorization
        });
    }

    // Método que valida o payload
    async validate(payload: JwtPayload) {
        return { userId: payload.sub, email: payload.email }; // Aqui, retornamos os dados do usuário
    }
}
