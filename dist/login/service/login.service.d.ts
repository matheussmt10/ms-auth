import { LoginServiceContract } from './login.service.contract';
import { LoginRepositoryContract } from '../repository/login.repository.contract';
import { LoginRequestDto } from '../dto/login-request-dto';
export declare class LoginService implements LoginServiceContract {
    private readonly repository;
    constructor(repository: LoginRepositoryContract);
    login(user: LoginRequestDto): Promise<Array<object>>;
}
