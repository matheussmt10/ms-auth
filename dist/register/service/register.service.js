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
exports.RegisterService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const bcrypt = require("bcrypt");
const register_repository_contract_1 = require("../repository/register.repository.contract");
const configs_1 = require("../../configs");
let RegisterService = class RegisterService {
    constructor(repository) {
        this.repository = repository;
    }
    async createNewAccount(user) {
        try {
            const isUserExist = await this.repository.findOneByEmail(user.email);
            if (isUserExist) {
                throw new common_1.HttpException('This email already exists', common_1.HttpStatus.BAD_REQUEST);
            }
            if (user.password !== user.confirmPassword) {
                throw new common_1.HttpException('Password and Confirm Password is not match', common_1.HttpStatus.BAD_REQUEST);
            }
            const newUser = {
                id: (0, uuid_1.v4)(),
                name: user.name,
                email: user.email,
                password: await bcrypt.hash(user.password, await bcrypt.genSalt(configs_1.AppEnvs.SALT_HASH)),
                lastSessionDate: null,
            };
            await this.repository.insert(newUser);
            return {
                message: 'User registered with success!',
                data: newUser,
            };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status ?? common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.RegisterService = RegisterService;
exports.RegisterService = RegisterService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [register_repository_contract_1.RegisterRepositoryContract])
], RegisterService);
//# sourceMappingURL=register.service.js.map