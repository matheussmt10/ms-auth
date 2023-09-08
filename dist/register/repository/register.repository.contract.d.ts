import { User } from 'src/schema/user.schema';
export declare abstract class RegisterRepositoryContract {
    abstract findOneByEmail(email: string): Promise<User | null>;
    abstract insert(user: User): Promise<void>;
}
