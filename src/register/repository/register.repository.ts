import { Injectable } from '@nestjs/common';
import { RegisterRepositoryContract } from './register.repository.contract';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class RegisterRepository implements RegisterRepositoryContract {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  public async findOneByEmail(email: string): Promise<object | null> {
    try {
      const result = await this.userModel.findOne({ email }).exec();
      return result;
    } catch (error) {
      throw new Error(`Erro ao buscar usuário por ID: ${error.message}`);
    }
  }

  public async insert(body: object): Promise<void> {
    try {
      await this.userModel.create(body);
    } catch (error) {
      throw new Error(`Erro ao inserir usuário: ${error.message}`);
    }
  }
}
