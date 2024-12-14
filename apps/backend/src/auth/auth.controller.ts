import {
    BadRequestException,
    Body,
    ConflictException,
    Controller,
    Post,
} from '@nestjs/common';
import { RepositorioUsuario } from './repositorio-usuario';
import { CreateUserUseCase, User } from '@trainingapp/core';
import { BcryptAdapter } from './bcrypt-adapter';

@Controller('auth')
export class AuthController {
    private readonly createUserUseCase: CreateUserUseCase;
    constructor(
        private readonly repo: RepositorioUsuario,
        private readonly cripto: BcryptAdapter,
    ) {
        this.createUserUseCase = new CreateUserUseCase(this.repo, this.cripto);
    }

    @Post('registrar')
    async create(
        @Body() data: Omit<User, 'id' | 'createdAt' | 'updatedAt'>,
    ): Promise<Omit<User, 'password'>> {
        const { email, name, password } = data;
        if (!email || !name || !password) {
            throw new BadRequestException(
                'Required fields: name, email and password',
            );
        }

        try {
            const createdUser = await this.createUserUseCase.execute(data);

            return createdUser;
        } catch (error) {
            if (error instanceof ConflictException) {
                throw new ConflictException('E-mail ja esta em uso');
            }

            throw new BadRequestException('Erro ao criar usuario esse');
        }
    }

    @Post('/login')
    async login() {
        return 'login';
    }
}
