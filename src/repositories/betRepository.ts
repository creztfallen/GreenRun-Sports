import { PrismaClient } from "@prisma/client";
import { Bet } from '../interfaces/bet';

const prisma = new PrismaClient();

export async function createBetRep(input: Bet) {
    const bets = await prisma.bets.create({ data: input });
    return bets
} 


