'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = exports.init = exports.server = void 0;
const hapi_1 = __importDefault(require("@hapi/hapi"));
require("dotenv/config");
const index_1 = require("./routes/index");
const PORT = process.env.PORT || 3000;
const init = function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            exports.server = hapi_1.default.server({
                port: PORT,
                host: '0.0.0.0',
            });
            exports.server.route(index_1.Routes.user);
            exports.server.route(index_1.Routes.bet);
            return exports.server;
        }
        catch (e) {
            console.error(e);
            throw e;
        }
    });
};
exports.init = init;
const start = function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(`Running on ${exports.server.settings.host}:${exports.server.settings.port}`);
            return exports.server.start();
        }
        catch (e) {
            console.error(e);
        }
    });
};
exports.start = start;
//# sourceMappingURL=server.js.map