"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialAuthService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const bcrypt = require("bcrypt");
const social_auth_repository_contract_1 = require("../repository/social-auth.repository.contract");
const configs_1 = require("../../configs");
const generator = require("generate-password");
let SocialAuthService = class SocialAuthService {
    constructor(repository) {
        this.repository = repository;
    }
    async loginWithSocialAuth(user) {
        const passwordOptions = {
            length: 12,
            numbers: true,
            symbols: true,
            uppercase: true,
            excludeSimilarCharacters: true,
        };
        try {
            const isUserExist = await this.repository.findOneByEmail(user.email);
            if (!isUserExist) {
                const newUser = {
                    uuid: (0, uuid_1.v4)(),
                    name: user.name,
                    email: user.email,
                    password: await bcrypt.hash(generator.generate(passwordOptions), await bcrypt.genSalt(configs_1.AppEnvs.SALT_HASH)),
                    lastSessionDate: null,
                    googleAuth: {
                        id: user.googleId,
                        userPhotoUrl: user.userPhoto,
                    },
                };
                await this.repository.insert(newUser);
            }
            const userGoogleId = await this.repository.getGoogleIdByEmail(user.email);
            if (userGoogleId === user.googleId) {
                return {
                    message: 'User logged',
                    status: true,
                };
            }
            else {
                throw new common_1.HttpException('Google Id not match', common_1.HttpStatus.UNAUTHORIZED);
            }
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status ?? common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.SocialAuthService = SocialAuthService;
exports.SocialAuthService = SocialAuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [social_auth_repository_contract_1.SocialAuthRepositoryContract])
], SocialAuthService);
//# sourceMappingURL=social-auth.service.js.map