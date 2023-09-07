import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { CreateUserRegisterDto } from '../dto/create-register.dto';
import { RegisterServiceContract } from '../service/register.service.contract';
import { ApiKeyGuard } from 'src/configs/api-key';

@Controller('register')
@UseGuards(ApiKeyGuard)
export class RegisterController {
  constructor(private readonly registerService: RegisterServiceContract) {}

  @Post()
  create(@Body() createUserRegisterDto: CreateUserRegisterDto) {
    return this.registerService.createNewAccount(createUserRegisterDto);
  }
}
