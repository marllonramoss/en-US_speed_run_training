import {
    BadRequestException,
    Body,
    ConflictException,
    Controller,
    Post,
} from '@nestjs/common';
import { RepositorioUsuario } from './repositorio-usuario';
import { CreateUserUseCase, LoginUseCase, User } from '@trainingapp/core';
import { BcryptAdapter } from './bcrypt-adapter';

@Controller('auth')
export class AuthController {
    private readonly createUserUseCase: CreateUserUseCase;
    private readonly loginUseCase: LoginUseCase;
    constructor(
        private readonly repo: RepositorioUsuario,
        private readonly cripto: BcryptAdapter,
    ) {
        this.createUserUseCase = new CreateUserUseCase(this.repo, this.cripto);
        this.loginUseCase = new LoginUseCase(this.repo, this.cripto);
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
    async login(
        @Body() data: Omit<User, 'id' | 'createdAt' | 'updatedAt'>,
    ): Promise<Omit<User, 'password'>> {
        const { email, password } = data;
        if (!email || !password) {
            throw new Error('Required fields: email and password');
        }

        try {
            const useCase = await this.loginUseCase.execute(data);
            return useCase;
        } catch (error) {
            if (error.message === 'Email invalido') {
                throw new BadRequestException('E-mail não encontrado');
            }

            if (error.message === 'Senha invalida') {
                throw new BadRequestException('Senha incorreta');
            }

            throw new BadRequestException('Erro ao realizar login');
        }
    }
}
