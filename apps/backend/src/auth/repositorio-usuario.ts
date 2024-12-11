import {
    ConflictException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';

export type User = {
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
};

@Injectable()
export class RepositorioUsuario {
    constructor(private readonly prisma: PrismaService) {}

    async create(
        data: Omit<User, 'id' | 'createdAt' | 'updatedAt'>,
    ): Promise<Omit<User, 'password'>> {
        const existingUser = await this.prisma.user.findUnique({
            where: {
                email: data.email,
            },
        });
        if (existingUser) {
            throw new ConflictException('Email ja registrado');
        }
        const createdUser = await this.prisma.user.create({
            data: {
                email: data.email,
                name: data.name,
                password: data.password,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        });
        const UserWithoutPassword = {
            ...createdUser,
        };
        delete UserWithoutPassword.password;
        return UserWithoutPassword;
    }

    async update(
        id: number,
        data: Partial<Omit<User, 'id' | 'createdAt' | 'updatedAt'>>,
    ) {
        const existingUser = await this.prisma.user.findUnique({
            where: { id },
        });

        if (!existingUser) {
            throw new NotFoundException(
                'id de usuario nao encontrado para atualizar',
            );
        }

        const updatedUser = await this.prisma.user.update({
            where: { id },
            data: { ...data, updatedAt: new Date() },
        });

        const userWithoutPassword = {
            ...updatedUser,
        };
        delete userWithoutPassword.password;
        return userWithoutPassword;
    }
}
