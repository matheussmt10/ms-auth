import { Module } from '@nestjs/common';
import { LoginService } from './service/login.service';
import { LoginController } from './controller/login.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../schema/user.schema';
import { LoginServiceContract } from './service/login.service.contract';
import { LoginRepositoryContract } from './repository/login.repository.contract';
import { LoginRepository } from './repository/login.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [LoginController],
  providers: [
    {
      provide: LoginServiceContract,
      useClass: LoginService,
    },
    {
      provide: LoginRepositoryContract,
      useClass: LoginRepository,
    },
  ],
})
export class LoginModule {}
