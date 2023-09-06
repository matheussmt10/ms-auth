import { Module } from '@nestjs/common';
import { RegisterService } from './service/register.service';
import { RegisterController } from './controller/register.controller';
import { RegisterServiceContract } from './service/register.service.contract';
import { RegisterRepositoryContract } from './repository/register.repository.contract';
import { RegisterRepository } from './repository/register.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schema/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [RegisterController],
  providers: [
    {
      provide: RegisterServiceContract,
      useClass: RegisterService,
    },
    {
      provide: RegisterRepositoryContract,
      useClass: RegisterRepository,
    },
  ],
})
export class RegisterModule {}
