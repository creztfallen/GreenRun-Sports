"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBets = exports.getAllBets = exports.createBet = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function createBet(req, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { bet } = req.payload;
            const bets = yield prisma.bets.create({ data: bet });
            return reply.response(bets);
        }
        catch (e) {
            console.error(e);
        }
    });
}
exports.createBet = createBet;
function getAllBets(req, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const bets = yield prisma.bets.findMany();
            return reply.response(bets);
        }
        catch (e) {
            console.error(e);
        }
    });
}
exports.getAllBets = getAllBets;
function updateBets(req, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { betId } = req.params;
            const { bet } = req.payload;
            const bets = yield prisma.bets.update({
                where: {
                    id: +betId,
                },
                data: {
                    status: bet.status,
                },
            });
            return reply.response(bets);
        }
        catch (e) {
            console.error(e);
        }
    });
}
exports.updateBets = updateBets;
//# sourceMappingURL=betController.js.map