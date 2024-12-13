import { User } from '../model/User';
import PortRepo from '../provider/PortRepo';

export default class RegistrarUsuario {
    constructor(private readonly repo: PortRepo) {}

    async execute(
        data: Omit<User, 'id' | 'createdAt' | 'updatedAt'>,
    ): Promise<Omit<User, 'password'>> {
        return 'Deu certo';
    }
}
