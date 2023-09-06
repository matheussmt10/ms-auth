import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://mathcode:UllOGkENxqlJOhwW@cluster0.fvmu2kl.mongodb.net/sistemas',
    ),
    LoginModule,
    RegisterModule,
  ],
})
export class AppModule {}
