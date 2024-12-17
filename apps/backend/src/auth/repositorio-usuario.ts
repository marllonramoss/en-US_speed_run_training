import {
    ConflictException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';

import { PortRepo, User } from '@trainingapp/core';

@Injectable()
export class RepositorioUsuario implements PortRepo {
    constructor(private readonly prisma: PrismaService) {}

    async findByEmail(email: string): Promise<User> {
        const existingUser = await this.prisma.user.findUnique({
            where: { email },
            select: {
                id: true,
                email: true,
                name: true,
                createdAt: true,
                updatedAt: true,
                password: true,
                tell: true,
            },
        });
        return existingUser;
    }

    // await this.prisma.user.findUnique({
    //     where: {
    //         email: data.email,
    //     },
    // });

    async create(
        data: Omit<User, 'id' | 'createdAt' | 'updatedAt'>,
    ): Promise<Omit<User, 'password'>> {
        const existingUser = await this.findByEmail(data.email);
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
                tell: data.tell,
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
