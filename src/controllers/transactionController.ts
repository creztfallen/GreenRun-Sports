import { Request, ResponseToolkit } from '@hapi/hapi';
import { PrismaClient } from '@prisma/client';
import { Transaction } from '../interfaces/transaction';

const prisma = new PrismaClient();

export async function createTrans(req: Request, reply: ResponseToolkit) {
  try {
    const { transaction } = req.payload as Transaction;
    const transactions = await prisma.transactions.create({
      data: transaction,
    });

    return reply.response(transactions);
  } catch (e) {
    console.error({message: e});
  }
}

export async function getAllTrans(req: Request, reply: ResponseToolkit) {
  try {
    const transactions = await prisma.transactions.findMany();

    return reply.response(transactions);
  } catch (e) {
    console.error({message: e});
  }
}
