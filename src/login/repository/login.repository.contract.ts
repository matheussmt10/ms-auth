import { User } from '../../schema/user.schema';

export abstract class LoginRepositoryContract {
  abstract findAll(): Promise<Array<User>>;

  abstract findOne(id: string): Promise<User | null>;

  abstract findOneByEmail(email: string): Promise<User | null>;
}
