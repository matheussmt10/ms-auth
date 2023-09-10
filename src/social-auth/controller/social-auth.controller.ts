import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { SocialAuthServiceContract } from '../service/social-auth.service.contract';
import { ApiKeyGuard } from 'src/configs/api-key';
import { CreateUserSocialAuthDto } from '../dto/create-social-auth.dto';

@Controller('social-auth')
@UseGuards(ApiKeyGuard)
export class SocialAuthController {
  constructor(private readonly registerService: SocialAuthServiceContract) {}

  @Post()
  create(@Body() createUserSocialAuthDto: CreateUserSocialAuthDto) {
    return this.registerService.loginWithSocialAuth(createUserSocialAuthDto);
  }
}
