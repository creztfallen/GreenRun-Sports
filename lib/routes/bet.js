"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.betRoutes = void 0;
const betController_1 = require("../controllers/betController");
exports.betRoutes = [
    {
        method: 'POST',
        path: '/bets',
        handler: betController_1.createBet,
    },
    {
        method: 'GET',
        path: '/bets',
        handler: betController_1.getAllBets,
    },
    {
        method: 'GET',
        path: '/bets/filtered',
        handler: betController_1.getFilteredBets,
    },
    {
        method: 'PATCH',
        path: '/bets/{betId}',
        handler: betController_1.updateBets,
    },
];
//# sourceMappingURL=bet.js.map