import { CreateUserRegisterDto } from '../dto/create-register.dto';
import { RegisterServiceContract } from '../service/register.service.contract';
export declare class RegisterController {
    private readonly registerService;
    constructor(registerService: RegisterServiceContract);
    create(createUserRegisterDto: CreateUserRegisterDto): Promise<object>;
}
