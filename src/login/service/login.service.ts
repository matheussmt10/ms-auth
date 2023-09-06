/* eslint-disable no-unused-vars */
import * as bcrypt from 'bcrypt';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LoginServiceContract } from './login.service.contract';
import { LoginRepositoryContract } from '../repository/login.repository.contract';
import { LoginRequestDto } from '../dto/login-request-dto';

@Injectable()
export class LoginService implements LoginServiceContract {
  constructor(private readonly repository: LoginRepositoryContract) {}

  public async login(user: LoginRequestDto): Promise<Array<object>> {
    try {
      const userVerify = await this.repository.findOneByEmail(user.email);
      if (!userVerify) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }
      const checkPassword = await bcrypt.compare(
        user.password,
        userVerify.password,
      );
      if (!checkPassword) {
        throw new HttpException('Invalid password', HttpStatus.UNAUTHORIZED);
      }
      userVerify.lastSessionDate = new Date();

      return [{ message: 'User logged', status: true }];
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status ?? HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
