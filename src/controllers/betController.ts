import { Request, ResponseToolkit } from '@hapi/hapi';
import { PrismaClient } from '@prisma/client';
import { Bet } from '../interfaces/bet';

const prisma = new PrismaClient();

export async function createBet(req: Request, reply: ResponseToolkit) {
  try {
    const { bet } = req.payload as Bet;
    const bets = await prisma.bets.create({ data: bet });

    return reply.response(bets);
  } catch (e) {
    console.error(e);
  }
}

export async function getAllBets(req: Request, reply: ResponseToolkit) { // must be filtered
  try {
    const bets = await prisma.bets.findMany();

    return reply.response(bets);
  } catch (e) {
    console.error(e);
  }
}

export async function updateBets(req: Request, reply: ResponseToolkit) {
  try {
    const { betId } = req.params;
    const { bet } = req.payload as Bet;
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
    console.error(e);
  }
}
