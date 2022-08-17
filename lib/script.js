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
let data = {
    role: 'Player',
    first_name: 'Mateus',
    last_name: 'Moreno',
    phone: 988278943,
    email: 'mtssmoreno@gmail.com',
    username: 'creztfallen',
    address: 'Rio de Janeiro',
    gender: 'Male',
    birth_date: new Date(1998, 4, 17),
    country_id: 'BR',
    city: 'Rio de Janeiro',
    category: '',
    document_id: '222244455',
    user_state: 'Rio de Janeiro',
};
function createUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.users.create({
            data,
        });
        console.log(user);
    });
}
exports.createUser = createUser;
createUser()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));
//# sourceMappingURL=script.js.map