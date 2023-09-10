import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AppEnvs } from './configs';
import { SocialAuthModule } from './social-auth/social-auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(AppEnvs.AUTH_DB_MONGO),
    LoginModule,
    RegisterModule,
    SocialAuthModule,
  ],
})
export class AppModule {}
