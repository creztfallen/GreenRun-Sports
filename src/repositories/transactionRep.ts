import { PrismaClient } from '@prisma/client';
import { Transaction } from '../interfaces/transaction';

const prisma = new PrismaClient();

export async function createTransRep(input: Transaction) {
  try {
    const transactions = await prisma.transactions.create({
      data: input,
    });

    return transactions;
  } catch (e) {
    console.error({ message: e });
  }
}

export async function getTransRep() {
  try {
    const transaction = await prisma.transactions.findMany();
    return transaction;
  } catch (e) {
    console.error({ message: e });
  }
}

export async function getFilteredTransRep(category: string) {
  try {
    const transactions = await prisma.transactions.findMany({
      where: { category: category },
    });
    return transactions;
  } catch (e) {
    console.error({ message: e });
  }
}
