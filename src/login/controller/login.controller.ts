import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { LoginRequestDto } from '../dto/login-request-dto';
import { LoginServiceContract } from '../service/login.service.contract';
import { ApiKeyGuard } from 'src/configs/api-key';

@Controller('login')
@UseGuards(ApiKeyGuard)
export class LoginController {
  constructor(private readonly loginService: LoginServiceContract) {}

  @Post()
  login(@Body() createLoginDto: LoginRequestDto) {
    return this.loginService.login(createLoginDto);
  }
}
