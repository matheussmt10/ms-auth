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
exports.LoginService = void 0;
const bcrypt = require("bcrypt");
const common_1 = require("@nestjs/common");
const login_repository_contract_1 = require("../repository/login.repository.contract");
let LoginService = class LoginService {
    constructor(repository) {
        this.repository = repository;
    }
    async login(user) {
        try {
            const userVerify = await this.repository.findOneByEmail(user.email);
            if (!userVerify) {
                throw new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND);
            }
            const checkPassword = await bcrypt.compare(user.password, userVerify.password);
            if (!checkPassword) {
                throw new common_1.HttpException('Invalid password', common_1.HttpStatus.UNAUTHORIZED);
            }
            userVerify.lastSessionDate = new Date();
            await this.repository.updateLastSessionDate(userVerify);
            return [{ message: 'User logged', status: true }];
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status ?? common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.LoginService = LoginService;
exports.LoginService = LoginService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [login_repository_contract_1.LoginRepositoryContract])
], LoginService);
//# sourceMappingURL=login.service.js.map