import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserRegisterDto } from '../dto/create-register.dto';
import { RegisterServiceContract } from '../service/register.service.contract';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterServiceContract) {}

  @Post()
  create(@Body() createUserRegisterDto: CreateUserRegisterDto) {
    return this.registerService.createNewAccount(createUserRegisterDto);
  }
}
