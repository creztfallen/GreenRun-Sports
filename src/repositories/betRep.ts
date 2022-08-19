import { PrismaClient } from '@prisma/client';
import { Bet } from '../interfaces/bet';

const prisma = new PrismaClient();

export async function createBetRep(input: Bet) {
  try {
    const bets = await prisma.bets.create({ data: input });
    return bets;
  } catch (e) {
    console.error({ message: e });
  }
}

export async function getBetsRep() {
  try {
    const bets = await prisma.bets.findMany();
    return bets;
  } catch (e) {
    console.error({ message: e });
  }
}

export async function getFilteredBetRep(sport: string, event: string) {
  try {
    const bets = await prisma.bets.findMany({
      where: { sport: sport, event_id: event },
    });
    return bets;
  } catch (e) {
    console.error({ message: e });
  }
}

export async function updateBetRep(id: Number, input: Bet) {
  try {
    const bet = await prisma.bets.update({
      where: { id: +id },
      data: { status: input.status },
    });
    return bet;
  } catch (e) {
    console.error({ message: e });
  }
}
