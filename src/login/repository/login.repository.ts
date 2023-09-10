import { LoginRepositoryContract } from './login.repository.contract';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../../schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class LoginRepository implements LoginRepositoryContract {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  public async findAll(): Promise<Array<User>> {
    try {
      const result = await this.userModel.find();
      return result;
    } catch (error) {
      throw new Error(`Erro ao buscar todos os usuários: ${error.message}`);
    }
  }

  public async findOne(id: string): Promise<User | null> {
    try {
      const result = await this.userModel.findOne({ where: { id } });
      return result;
    } catch (error) {
      throw new Error(`Erro ao buscar usuário por ID: ${error.message}`);
    }
  }

  public async findOneByEmail(email: string): Promise<User | null> {
    try {
      const result = await this.userModel.findOne({ email }).exec();
      return result;
    } catch (error) {
      throw new Error(`Erro ao buscar usuário por ID: ${error.message}`);
    }
  }

  public async updateLastSessionDate(user: User): Promise<void> {
    try {
      await this.userModel.updateOne(
        { uuid: user.uuid },
        { $set: { lastSessionDate: user.lastSessionDate } },
      );
    } catch (error) {
      throw new Error(`Erro ao buscar usuário por ID: ${error.message}`);
    }
  }
}
