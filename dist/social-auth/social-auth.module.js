"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialAuthModule = void 0;
const common_1 = require("@nestjs/common");
const social_auth_service_1 = require("./service/social-auth.service");
const social_auth_controller_1 = require("./controller/social-auth.controller");
const social_auth_service_contract_1 = require("./service/social-auth.service.contract");
const social_auth_repository_contract_1 = require("./repository/social-auth.repository.contract");
const social_auth_repository_1 = require("./repository/social-auth.repository");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("../schema/user.schema");
let SocialAuthModule = class SocialAuthModule {
};
exports.SocialAuthModule = SocialAuthModule;
exports.SocialAuthModule = SocialAuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: user_schema_1.User.name, schema: user_schema_1.UserSchema }]),
        ],
        controllers: [social_auth_controller_1.SocialAuthController],
        providers: [
            {
                provide: social_auth_service_contract_1.SocialAuthServiceContract,
                useClass: social_auth_service_1.SocialAuthService,
            },
            {
                provide: social_auth_repository_contract_1.SocialAuthRepositoryContract,
                useClass: social_auth_repository_1.SocialAuthRepository,
            },
        ],
    })
], SocialAuthModule);
//# sourceMappingURL=social-auth.module.js.map