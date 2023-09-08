import { RegisterServiceContract } from './register.service.contract';
import { RegisterRepositoryContract } from '../repository/register.repository.contract';
import { User } from 'src/schema/user.schema';
import { CreateUserRegisterDto } from '../dto/create-register.dto';
export declare class RegisterService implements RegisterServiceContract {
    private readonly repository;
    constructor(repository: RegisterRepositoryContract);
    createNewAccount(user: CreateUserRegisterDto): Promise<{
        message: string;
        data: User;
    }>;
}
