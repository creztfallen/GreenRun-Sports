"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const userController_1 = require("../controllers/userController");
exports.userRoutes = [{
        method: 'POST',
        path: '/users',
        handler: userController_1.createUser,
    }, {
        method: 'GET',
        path: '/users',
        handler: userController_1.getAllUsers,
    }];
//# sourceMappingURL=user.js.map