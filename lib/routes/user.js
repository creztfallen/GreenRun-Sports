"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const userController_1 = require("../controllers/userController");
exports.userRoutes = [
    {
        method: 'POST',
        path: '/users',
        handler: userController_1.createUser,
    },
    {
        method: 'GET',
        path: '/users',
        handler: userController_1.getAllUsers,
    },
    {
        method: 'GET',
        path: '/users/{userId}',
        handler: userController_1.getOneUser,
    },
    {
        method: 'PUT',
        path: '/users/{userId}',
        handler: userController_1.updateUser,
    },
    {
        method: 'Patch',
        path: '/users/{userId}',
        handler: userController_1.updateUserState,
    },
];
//# sourceMappingURL=user.js.map