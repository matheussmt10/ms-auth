import { LoginRepositoryContract } from './login.repository.contract';
import { User } from '../../schema/user.schema';
import { Model } from 'mongoose';
export declare class LoginRepository implements LoginRepositoryContract {
    private userModel;
    constructor(userModel: Model<User>);
    findAll(): Promise<Array<User>>;
    findOne(id: string): Promise<User | null>;
    findOneByEmail(email: string): Promise<User | null>;
    updateLastSessionDate(user: User): Promise<void>;
}
