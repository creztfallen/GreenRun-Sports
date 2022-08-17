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
exports.createUser = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function createUser(req, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let data = {
                role: 'Player',
                first_name: 'Mateus',
                last_name: 'Moreno',
                phone: '27988278943',
                email: 'poetadegiz@gmail.com',
                username: 'seila',
                address: 'Rio de Janeiro',
                gender: 'Male',
                birth_date: new Date(1998, 4, 17),
                country_id: 'BR',
                city: 'Rio de Janeiro',
                category: '',
                document_id: '22222222',
                user_state: 'Rio de Janeiro',
            };
            const user = yield prisma.users.create({
                data,
            });
            reply.response(user);
        }
        catch (e) {
            console.error(e);
        }
    });
}
exports.createUser = createUser;
//# sourceMappingURL=userController.js.map