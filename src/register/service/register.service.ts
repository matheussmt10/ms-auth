import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcrypt';
import { RegisterServiceContract } from './register.service.contract';
import { RegisterRepositoryContract } from '../repository/register.repository.contract';
import { AppEnvs } from 'src/configs';

@Injectable()
export class RegisterService implements RegisterServiceContract {
  constructor(private readonly repository: RegisterRepositoryContract) {}
  public async createNewAccount(user) {
    try {
      const isUserExist = await this.repository.findOneByEmail(user.email);
      if (isUserExist) {
        throw new Error('This email already exists');
      }

      if (user.password !== user.confirmPassword) {
        throw new Error('Password and Confirm Password is not match');
      }

      const newUser = {
        id: uuidv4(),
        name: user.name,
        email: user.email,
        password: await bcrypt.hash(
          user.password,
          await bcrypt.genSalt(AppEnvs.SALT_HASH),
        ),
      };

      await this.repository.insert(newUser);

      return {
        message: 'User registered with success!',
        data: newUser,
      };
    } catch (error) {
      throw new Error(`Error to create new account: ${error.message}`);
    }
  }
}
