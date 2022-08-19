import { Request, ResponseToolkit } from '@hapi/hapi';
import { PrismaClient } from '@prisma/client';
import { Bet } from '../interfaces/bet';
import { createBetRep } from '../repositories/betRepository';

const prisma = new PrismaClient();

export async function createBet(req: Request, reply: ResponseToolkit) {
  try {
    const bet = req.payload as Bet;
    const bets = await createBetRep(bet)  //await prisma.bets.create({ data: bet });

    return reply.response(bets);
  } catch (e) {
    console.error({ message: e });
  }
}

export async function getAllBets(req: Request, reply: ResponseToolkit) {
  try {
    const bets = await prisma.bets.findMany();

    return reply.response(bets);
  } catch (e) {
    console.error({ message: e });
  }
}

export async function updateBets(req: Request, reply: ResponseToolkit) {
  try {
    const { betId } = req.params;
    const bet = req.payload as Bet;
    const bets = await prisma.bets.update({
      where: {
        id: +betId,
      },
      data: {
        status: bet.status,
      },
    });

    return reply.response(bets);
  } catch (e) {
    console.error({ message: e });
  }
}

export async function getFilteredBets(req: Request, reply: ResponseToolkit) {
  const querySport = req.query.sport
  const queryEvent = req.query.event_id
  try {
    const bets = await prisma.bets.findMany({
      where: { sport: querySport, event_id: queryEvent },
    });

    return reply.response(bets);
  } catch (e) {
    console.error({ message: e });
  }
}