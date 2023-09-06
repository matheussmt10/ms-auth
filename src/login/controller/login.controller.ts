import { Controller, Post, Body } from '@nestjs/common';
import { LoginRequestDto } from '../dto/login-request-dto';
import { LoginServiceContract } from '../service/login.service.contract';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginServiceContract) {}

  @Post()
  login(@Body() createLoginDto: LoginRequestDto) {
    return this.loginService.login(createLoginDto);
  }
}
