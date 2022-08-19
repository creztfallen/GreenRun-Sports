import {
  createBet,
  getAllBets,
  getFilteredBets,
  updateBets,
} from '../controllers/betController';

export const betRoutes = [
  {
    method: 'POST',
    path: '/bets',
    handler: createBet,
  },
  {
    method: 'GET',
    path: '/bets',
    handler: getAllBets,
  },
  {
    method: 'GET',
    path: '/bets/filtered',
    handler: getFilteredBets,
  },
  {
    method: 'PATCH',
    path: '/bets/{betId}',
    handler: updateBets,
  },
];
