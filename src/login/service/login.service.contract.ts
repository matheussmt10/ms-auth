import { LoginRequestDto } from '../dto/login-request-dto';

export abstract class LoginServiceContract {
  abstract login(body: LoginRequestDto): Promise<Array<object>>;
}
