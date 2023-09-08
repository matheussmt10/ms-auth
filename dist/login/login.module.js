"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginModule = void 0;
const common_1 = require("@nestjs/common");
const login_service_1 = require("./service/login.service");
const login_controller_1 = require("./controller/login.controller");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("../schema/user.schema");
const login_service_contract_1 = require("./service/login.service.contract");
const login_repository_contract_1 = require("./repository/login.repository.contract");
const login_repository_1 = require("./repository/login.repository");
let LoginModule = class LoginModule {
};
exports.LoginModule = LoginModule;
exports.LoginModule = LoginModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: user_schema_1.User.name, schema: user_schema_1.UserSchema }]),
        ],
        controllers: [login_controller_1.LoginController],
        providers: [
            {
                provide: login_service_contract_1.LoginServiceContract,
                useClass: login_service_1.LoginService,
            },
            {
                provide: login_repository_contract_1.LoginRepositoryContract,
                useClass: login_repository_1.LoginRepository,
            },
        ],
    })
], LoginModule);
//# sourceMappingURL=login.module.js.map