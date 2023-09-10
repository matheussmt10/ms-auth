import { SocialAuthServiceContract } from './social-auth.service.contract';
import { SocialAuthRepositoryContract } from '../repository/social-auth.repository.contract';
import { CreateUserSocialAuthDto } from '../dto/create-social-auth.dto';
export declare class SocialAuthService implements SocialAuthServiceContract {
    private readonly repository;
    constructor(repository: SocialAuthRepositoryContract);
    loginWithSocialAuth(user: CreateUserSocialAuthDto): Promise<{
        message: string;
        status: boolean;
    }>;
}
