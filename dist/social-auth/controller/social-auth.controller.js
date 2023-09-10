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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialAuthController = void 0;
const common_1 = require("@nestjs/common");
const social_auth_service_contract_1 = require("../service/social-auth.service.contract");
const api_key_1 = require("../../configs/api-key");
const create_social_auth_dto_1 = require("../dto/create-social-auth.dto");
let SocialAuthController = class SocialAuthController {
    constructor(registerService) {
        this.registerService = registerService;
    }
    create(createUserSocialAuthDto) {
        return this.registerService.loginWithSocialAuth(createUserSocialAuthDto);
    }
};
exports.SocialAuthController = SocialAuthController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_social_auth_dto_1.CreateUserSocialAuthDto]),
    __metadata("design:returntype", void 0)
], SocialAuthController.prototype, "create", null);
exports.SocialAuthController = SocialAuthController = __decorate([
    (0, common_1.Controller)('social-auth'),
    (0, common_1.UseGuards)(api_key_1.ApiKeyGuard),
    __metadata("design:paramtypes", [social_auth_service_contract_1.SocialAuthServiceContract])
], SocialAuthController);
//# sourceMappingURL=social-auth.controller.js.map