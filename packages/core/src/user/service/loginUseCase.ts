import { User } from '../model/User';
import PortPassword from '../provider/PortPassword';
import PortRepo from '../provider/PortRepo';

export default class LoginUseCase {
    constructor(
        private readonly repo: PortRepo,
        private readonly cripto: PortPassword,
    ) {}

    async execute(
        data: Omit<User, 'id' | 'createdAt' | 'updatedAt'>,
    ): Promise<Omit<User, 'password'>> {
        const existingUser = await this.repo.findByEmail(data.email);
        if (!existingUser) {
            throw new Error('Email invalido');
        }

        const validPassword = await this.cripto.comparePassword(
            data.password,
            existingUser.password,
        );
        if (!validPassword) {
            throw new Error('Senha invalida');
        }
        delete existingUser.password;
        return existingUser;
    }
}
