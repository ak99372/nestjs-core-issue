"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customBootstrap = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
async function customBootstrap(module) {
    const app = await core_1.NestFactory.create(module);
    await app.listen(3000).then(() => {
        common_1.Logger.log('app started');
    });
}
exports.customBootstrap = customBootstrap;
//# sourceMappingURL=index.js.map