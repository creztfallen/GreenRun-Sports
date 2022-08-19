"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transRoutes = void 0;
const transactionController_1 = require("../controllers/transactionController");
exports.transRoutes = [
    {
        method: 'POST',
        path: "/transactions",
        handler: transactionController_1.createTrans
    },
    {
        method: 'GET',
        path: "/transactions",
        handler: transactionController_1.getAllTrans
    },
    {
        method: 'GET',
        path: "/transactions/filtered",
        handler: transactionController_1.getFilteredTrans
    }
];
//# sourceMappingURL=transaction.js.map