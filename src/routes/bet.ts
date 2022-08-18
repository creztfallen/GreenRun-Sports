import { createBet, getAllBets, updateBets } from "../controllers/betController";

export const betRoutes = [
    {
        method: 'POST',
        path: '/bets',
        handler: createBet
    },
    {
        method: 'GET',
        path: '/bets',
        handler: getAllBets
    },
    {
        method: 'PATCH',
        path: '/bets/{betId}',
        handler: updateBets
    }
]