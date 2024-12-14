import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { DbModule } from 'src/db/db.module';
import { RepositorioUsuario } from './repositorio-usuario';
import { BcryptAdapter } from './bcrypt-adapter';

@Module({
    controllers: [AuthController],
    providers: [RepositorioUsuario, BcryptAdapter],
    imports: [DbModule],
})
export class AuthModule {}
