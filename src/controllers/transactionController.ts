import { Request, ResponseToolkit } from '@hapi/hapi';
import { Transaction } from '../interfaces/transaction';
import {
  createTransRep,
  getFilteredTransRep,
  getTransRep,
} from '../repositories/transactionRep';

export async function createTrans(req: Request, reply: ResponseToolkit) {
  try {
    const transaction = req.payload as Transaction;
    const transactions = await createTransRep(transaction);

    return reply.response(transactions);
  } catch (e) {
    console.error({ message: e });
  }
}

export async function getAllTrans(req: Request, reply: ResponseToolkit) {
  try {
    const transactions = await getTransRep();

    return reply.response(transactions);
  } catch (e) {
    console.error({ message: e });
  }
}

export async function getFilteredTrans(req: Request, reply: ResponseToolkit) {
  try {
    const query = req.query.category;
    const transactions = await getFilteredTransRep(query);

    return reply.response(transactions);
  } catch (e) {
    console.error({ message: e });
  }
}

// export async function getBalance(req: Request, reply: ResponseToolkit) {
//   try {
//     const { userId } = req.query;
//     const deposit = await getDepositRep(userId);
//     const withdraw = await getWithdrawRep(userId)

//     const d = deposit?.map((i) => +i.amount).reduce((x, y) => x + y, 0);
//     const w = withdraw?.map((i) => +i.amount).reduce((x, y) => x + y, 0);

//     return reply.response()
//   } catch (e) {
//     console.error({ message: e });
//   }
// }
