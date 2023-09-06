import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RegisterRepositoryContract } from './register.repository.contract';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class RegisterRepository implements RegisterRepositoryContract {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  public async findOneByEmail(email: string): Promise<User | null> {
    try {
      const result = await this.userModel.findOne({ email }).exec();
      return result;
    } catch (error) {
      throw new HttpException('Find user failed', HttpStatus.BAD_REQUEST, {
        cause: error.message,
      });
    }
  }

  public async insert(body: object): Promise<void> {
    try {
      await this.userModel.create(body);
    } catch (error) {
      throw new HttpException('Inser user failed', HttpStatus.BAD_REQUEST, {
        cause: error.message,
      });
    }
  }
}
