import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { DbModule } from 'src/db/db.module';
import { RepositorioUsuario } from './repositorio-usuario';
import { BcryptAdapter } from './bcrypt-adapter';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategyProvider } from './jwt-strategy.provider';

@Module({
    controllers: [AuthController],
    providers: [RepositorioUsuario, BcryptAdapter, JwtStrategyProvider],
    imports: [
        DbModule,
        JwtModule.register({
            secret: 'secret',
            signOptions: { expiresIn: '1h' },
        }),
    ],
})
export class AuthModule {}
