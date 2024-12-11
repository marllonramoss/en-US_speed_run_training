import { Body, ConflictException, Controller, Post } from '@nestjs/common';
import { RepositorioUsuario, User } from './repositorio-usuario';

interface CreateUserDto {
    name: string;
    email: string;
    password: string;
}

@Controller('auth')
export class AuthController {
    constructor(private readonly repo: RepositorioUsuario) {}

    @Post('')
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
