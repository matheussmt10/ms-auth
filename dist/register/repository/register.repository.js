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
exports.RegisterRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("../../schema/user.schema");
const mongoose_2 = require("mongoose");
let RegisterRepository = class RegisterRepository {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async findOneByEmail(email) {
        try {
            const result = await this.userModel.findOne({ email }).exec();
            return result;
        }
        catch (error) {
            throw new common_1.HttpException('Find user failed', common_1.HttpStatus.BAD_REQUEST, {
                cause: error.message,
            });
        }
    }
    async insert(body) {
        try {
            await this.userModel.create(body);
        }
        catch (error) {
            throw new common_1.HttpException('Inser user failed', common_1.HttpStatus.BAD_REQUEST, {
                cause: error.message,
            });
        }
    }
};
exports.RegisterRepository = RegisterRepository;
exports.RegisterRepository = RegisterRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], RegisterRepository);
//# sourceMappingURL=register.repository.js.map