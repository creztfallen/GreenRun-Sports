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
exports.updateUserState = exports.updateUser = exports.getOneUser = exports.getAllUsers = exports.createUser = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function createUser(req, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { user } = req.payload;
            const users = yield prisma.users.create({ data: user });
            return reply.response(users);
        }
        catch (e) {
            console.error({ message: e });
        }
    });
}
exports.createUser = createUser;
function getAllUsers(req, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield prisma.users.findMany();
            return reply.response(users);
        }
        catch (e) {
            console.error({ message: e });
        }
    });
}
exports.getAllUsers = getAllUsers;
function getOneUser(req, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userId } = req.params;
            const user = yield prisma.users.findUnique({
                where: {
                    id: +userId,
                },
            });
            if (user === null) {
                throw new Error();
            }
            return reply.response(user);
        }
        catch (e) {
            console.error({ message: e });
        }
    });
}
exports.getOneUser = getOneUser;
function updateUser(req, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userId } = req.params;
            const { user } = req.payload;
            const userUpdate = yield prisma.users.update({
                where: {
                    id: +userId,
                },
                data: user,
            });
            return reply.response(userUpdate);
        }
        catch (e) {
            console.error({ message: e });
        }
    });
}
exports.updateUser = updateUser;
function updateUserState(req, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userId } = req.params;
            const { user } = req.payload;
            const userCheck = yield prisma.users.findUnique({
                where: { id: +userId },
            });
            if ((userCheck === null || userCheck === void 0 ? void 0 : userCheck.role.toLocaleLowerCase()) === 'admin') {
                console.error('You cannot block other admins.');
                return reply.response('You cannot block other admins.');
            }
            const users = yield prisma.users.update({
                where: {
                    id: +userId,
                },
                data: {
                    user_state: user.user_state,
                },
            });
            return reply.response(users);
        }
        catch (e) {
            console.error({ message: e });
        }
    });
}
exports.updateUserState = updateUserState;
//# sourceMappingURL=userController.js.map