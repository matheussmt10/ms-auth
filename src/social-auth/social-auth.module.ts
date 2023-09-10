import { Module } from '@nestjs/common';
import { SocialAuthService } from './service/social-auth.service';
import { SocialAuthController } from './controller/social-auth.controller';
import { SocialAuthServiceContract } from './service/social-auth.service.contract';
import { SocialAuthRepositoryContract } from './repository/social-auth.repository.contract';
import { SocialAuthRepository } from './repository/social-auth.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schema/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [SocialAuthController],
  providers: [
    {
      provide: SocialAuthServiceContract,
      useClass: SocialAuthService,
    },
    {
      provide: SocialAuthRepositoryContract,
      useClass: SocialAuthRepository,
    },
  ],
})
export class SocialAuthModule {}
