"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const user_1 = require("./user");
const bet_1 = require("./bet");
const transaction_1 = require("./transaction");
exports.Routes = {
    user: user_1.userRoutes,
    bet: bet_1.betRoutes,
    trans: transaction_1.transRoutes
};
//# sourceMappingURL=index.js.map