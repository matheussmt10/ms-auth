import { RegisterRepositoryContract } from './register.repository.contract';
import { User } from 'src/schema/user.schema';
import { Model } from 'mongoose';
export declare class RegisterRepository implements RegisterRepositoryContract {
    private userModel;
    constructor(userModel: Model<User>);
    findOneByEmail(email: string): Promise<User | null>;
    insert(body: object): Promise<void>;
}
