import { Request, ResponseToolkit } from '@hapi/hapi';
import { Bet } from '../interfaces/bet';
import {
  createBetRep,
  getBetsRep,
  getFilteredBetRep,
  updateBetRep,
} from '../repositories/betRep';

export async function createBet(req: Request, reply: ResponseToolkit) {
  try {
    const bet = req.payload as Bet;
    const bets = await createBetRep(bet);

    return reply.response(bets);
  } catch (e) {
    console.error({ message: e });
  }
}

export async function getAllBets(req: Request, reply: ResponseToolkit) {
  try {
    const bets = await getBetsRep();

    return reply.response(bets);
  } catch (e) {
    console.error({ message: e });
  }
}

export async function updateBets(req: Request, reply: ResponseToolkit) {
  try {
    const { betId } = req.params;
    const bet = req.payload as Bet;
    const bets = await updateBetRep(betId, bet);

    return reply.response(bets);
  } catch (e) {
    console.error({ message: e });
  }
}

export async function getFilteredBets(req: Request, reply: ResponseToolkit) {
  const querySport = req.query.sport;
  const queryEvent = req.query.event_id;
  try {
    const bets = await getFilteredBetRep(querySport, queryEvent);

    return reply.response(bets);
  } catch (e) {
    console.error({ message: e });
  }
}
