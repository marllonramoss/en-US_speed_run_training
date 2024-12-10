import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';

type User = {
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

    async create(data: Omit<User, 'id'>): Promise<Omit<User, 'password'>> {
        const createdUser = await this.prisma.user.create({
            data: {
                email: data.email,
                name: data.name,
                password: data.password,
                createdAt: new Date(),
            },
        });
        const UserWithoutPassword = {
            ...createdUser,
        };
        delete UserWithoutPassword.password;
        return UserWithoutPassword;
    }
}
