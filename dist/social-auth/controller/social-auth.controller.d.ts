import { SocialAuthServiceContract } from '../service/social-auth.service.contract';
import { CreateUserSocialAuthDto } from '../dto/create-social-auth.dto';
export declare class SocialAuthController {
    private readonly registerService;
    constructor(registerService: SocialAuthServiceContract);
    create(createUserSocialAuthDto: CreateUserSocialAuthDto): Promise<object>;
}
