"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNestServer = void 0;
const express = require("express");
const core_1 = require("@nestjs/core");
const platform_express_1 = require("@nestjs/platform-express");
const app_module_1 = require("./app.module");
const server = express();
const createNestServer = async (expressInstance) => {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(expressInstance), { cors: true });
    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
    app.enableCors();
    return app.init();
};
exports.createNestServer = createNestServer;
(0, exports.createNestServer)(server)
    .then()
    .catch((err) => console.error('Nest broken', err));
module.exports.httpHandler = server;
//# sourceMappingURL=main.js.map