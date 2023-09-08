import { LoginRequestDto } from '../dto/login-request-dto';
import { LoginServiceContract } from '../service/login.service.contract';
export declare class LoginController {
    private readonly loginService;
    constructor(loginService: LoginServiceContract);
    login(createLoginDto: LoginRequestDto): Promise<object[]>;
}
