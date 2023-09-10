import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcrypt';
import { RegisterServiceContract } from './register.service.contract';
import { RegisterRepositoryContract } from '../repository/register.repository.contract';
import { AppEnvs } from 'src/configs';
import { User } from 'src/schema/user.schema';
import { CreateUserRegisterDto } from '../dto/create-register.dto';

@Injectable()
export class RegisterService implements RegisterServiceContract {
  constructor(private readonly repository: RegisterRepositoryContract) {}
  public async createNewAccount(user: CreateUserRegisterDto) {
    try {
      const isUserExist = await this.repository.findOneByEmail(user.email);
      if (isUserExist) {
        throw new HttpException(
          'This email already exists',
          HttpStatus.BAD_REQUEST,
        );
      }

      if (user.password !== user.confirmPassword) {
        throw new HttpException(
          'Password and Confirm Password is not match',
          HttpStatus.BAD_REQUEST,
        );
      }

      const newUser: User = {
        uuid: uuidv4(),
        name: user.name,
        email: user.email,
        password: await bcrypt.hash(
          user.password,
          await bcrypt.genSalt(AppEnvs.SALT_HASH),
        ),
        lastSessionDate: null,
      };

      await this.repository.insert(newUser);

      return {
        message: 'User registered with success!',
        data: newUser,
      };
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status ?? HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
