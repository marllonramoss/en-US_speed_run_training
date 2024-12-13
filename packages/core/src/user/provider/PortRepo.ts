import { User } from '../model/User';

export default interface RepositorioUsuario {
    create(
        data: Omit<User, 'id' | 'createdAt' | 'updatedAt'>,
    ): Promise<Omit<User, 'password'>>;
    update(
        id: number,
        data: Omit<User, 'id' | 'createdAt' | 'updatedAt'>,
    ): Promise<Omit<User, 'password'>>;
    findByEmail(email: string): Promise<Omit<User, 'password'> | null>;
}
