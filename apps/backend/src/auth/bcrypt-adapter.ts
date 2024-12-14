import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { PortPassword } from '@trainingapp/core';

@Injectable()
export class BcryptAdapter implements PortPassword {
    async hashPassword(password: string): Promise<string> {
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(password, salt);
    }

    async comparePassword(
        password: string,
        hashedPassword: string,
    ): Promise<boolean> {
        return bcrypt.compare(password, hashedPassword);
    }
}
