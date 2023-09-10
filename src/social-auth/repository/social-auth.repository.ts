import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SocialAuthRepositoryContract } from './social-auth.repository.contract';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class SocialAuthRepository implements SocialAuthRepositoryContract {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  public async getGoogleIdByEmail(email: string): Promise<string> {
    try {
      const result = await this.userModel.findOne({ email });
      return result.googleAuth.id;
    } catch (error) {}
  }
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
