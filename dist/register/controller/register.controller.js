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
exports.RegisterController = void 0;
const common_1 = require("@nestjs/common");
const create_register_dto_1 = require("../dto/create-register.dto");
const register_service_contract_1 = require("../service/register.service.contract");
const api_key_1 = require("../../configs/api-key");
let RegisterController = class RegisterController {
    constructor(registerService) {
        this.registerService = registerService;
    }
    create(createUserRegisterDto) {
        return this.registerService.createNewAccount(createUserRegisterDto);
    }
};
exports.RegisterController = RegisterController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_register_dto_1.CreateUserRegisterDto]),
    __metadata("design:returntype", void 0)
], RegisterController.prototype, "create", null);
exports.RegisterController = RegisterController = __decorate([
    (0, common_1.Controller)('register'),
    (0, common_1.UseGuards)(api_key_1.ApiKeyGuard),
    __metadata("design:paramtypes", [register_service_contract_1.RegisterServiceContract])
], RegisterController);
//# sourceMappingURL=register.controller.js.map