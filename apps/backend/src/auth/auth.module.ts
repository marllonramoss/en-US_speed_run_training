import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { DbModule } from 'src/db/db.module';
import { RepositorioUsuario } from './repositorio-usuario';

@Module({
    controllers: [AuthController],
    providers: [RepositorioUsuario],
    imports: [DbModule],
})
export class AuthModule {}
