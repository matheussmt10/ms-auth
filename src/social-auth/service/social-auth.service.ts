/* eslint-disable prefer-const */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcrypt';
import { SocialAuthServiceContract } from './social-auth.service.contract';
import { SocialAuthRepositoryContract } from '../repository/social-auth.repository.contract';
import { AppEnvs } from 'src/configs';
import { User } from 'src/schema/user.schema';
import { CreateUserSocialAuthDto } from '../dto/create-social-auth.dto';
import * as generator from 'generate-password';

@Injectable()
export class SocialAuthService implements SocialAuthServiceContract {
  constructor(private readonly repository: SocialAuthRepositoryContract) {}

  public async loginWithSocialAuth(user: CreateUserSocialAuthDto) {
    try {
      let userExisted = await this.repository.findOneByEmail(user.email);

      if (!userExisted) {
        const newUser: User = {
          uuid: uuidv4(),
          name: user.name,
          email: user.email,
          password: await bcrypt.hash(
            generator.generate({
              length: 12,
              numbers: true,
              symbols: true,
              uppercase: true,
              excludeSimilarCharacters: true,
            }),
            await bcrypt.genSalt(AppEnvs.SALT_HASH),
          ),
          lastSessionDate: null,
          googleAuth: {
            id: user.googleId,
            userPhotoUrl: user.userPhoto,
          },
        };

        await this.repository.insert(newUser);
        userExisted = newUser;
      }

      if (userExisted.googleAuth.id === user.googleId) {
        userExisted.lastSessionDate = new Date();
        await this.repository.updateLastSessionDate(userExisted);
        return {
          message: 'User logged',
          status: true,
        };
      } else {
        throw new HttpException('Google Id not match', HttpStatus.UNAUTHORIZED);
      }
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status ?? HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
