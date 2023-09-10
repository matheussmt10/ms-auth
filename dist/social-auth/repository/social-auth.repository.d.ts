import { SocialAuthRepositoryContract } from './social-auth.repository.contract';
import { User } from 'src/schema/user.schema';
import { Model } from 'mongoose';
export declare class SocialAuthRepository implements SocialAuthRepositoryContract {
    private userModel;
    constructor(userModel: Model<User>);
    getGoogleIdByEmail(email: string): Promise<string>;
    findOneByEmail(email: string): Promise<User | null>;
    insert(body: object): Promise<void>;
    updateLastSessionDate(user: User): Promise<void>;
}
