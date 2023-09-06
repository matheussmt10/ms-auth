import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AppEnvs } from './configs';

@Module({
  imports: [
    MongooseModule.forRoot(AppEnvs.AUTH_DB_MONGO),
    LoginModule,
    RegisterModule,
  ],
})
export class AppModule {}
