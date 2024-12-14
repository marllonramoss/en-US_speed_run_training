import { User } from '../model/User';
import PortPassword from '../provider/PortPassword';

import PortRepo from '../provider/PortRepo';

export default class CreateUserUseCase {
    constructor(
        private readonly repo: PortRepo,
        private readonly passwordProvider: PortPassword,
    ) {}

    async execute(
        data: Omit<User, 'id' | 'createdAt' | 'updatedAt'>,
    ): Promise<Omit<User, 'password'>> {
        const existingUser = await this.repo.findByEmail(data.email);
        if (existingUser) {
            throw new Error('Email já registrado');
        }

        const hashedPassword = await this.passwordProvider.hashPassword(
            data.password,
        );

        const createdUser = await this.repo.create({
            ...data,
            password: hashedPassword,
        });

        return createdUser;
    }
}
