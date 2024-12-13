import { Body, ConflictException, Controller, Post } from '@nestjs/common';
import { RepositorioUsuario } from './repositorio-usuario';
import { User, RegistrarUsuario } from '@trainingapp/core';

@Controller('auth')
export class AuthController {
    constructor(private readonly repo: RepositorioUsuario) {}

    @Post('registrar')
    async create(
        @Body() data: Omit<User, 'id' | 'createdAt' | 'updatedAt'>,
    ): Promise<Omit<User, 'password'>> {
        try {
            const createdUser = await this.repo.create(data);

            return createdUser;
        } catch (error) {
            if (error instanceof ConflictException) {
                throw error;
            }
            throw error;
        }
    }

    @Post('/login')
    async login() {
        return 'login';
    }
}
