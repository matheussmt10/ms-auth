import { User } from 'src/schema/user.schema';
export declare abstract class SocialAuthRepositoryContract {
    abstract findOneByEmail(email: string): Promise<User | null>;
    abstract insert(user: User): Promise<void>;
    abstract getGoogleIdByEmail(email: string): Promise<string>;
}