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
exports.getFilteredTrans = exports.getAllTrans = exports.createTrans = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function createTrans(req, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const transaction = req.payload;
            const transactions = yield prisma.transactions.create({
                data: transaction,
            });
            return reply.response(transactions);
        }
        catch (e) {
            console.error({ message: e });
        }
    });
}
exports.createTrans = createTrans;
function getAllTrans(req, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const transactions = yield prisma.transactions.findMany();
            return reply.response(transactions);
        }
        catch (e) {
            console.error({ message: e });
        }
    });
}
exports.getAllTrans = getAllTrans;
function getFilteredTrans(req, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        const query = req.query.category;
        try {
            const transactions = yield prisma.transactions.findMany({
                where: { category: query },
            });
            return reply.response(transactions);
        }
        catch (e) {
            console.error({ message: e });
        }
    });
}
exports.getFilteredTrans = getFilteredTrans;
//# sourceMappingURL=transactionController.js.map