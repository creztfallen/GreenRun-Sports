import { Request, ResponseToolkit} from '@hapi/hapi';
import { PrismaClient } from '@prisma/client';
import { User } from '../interfaces/user';

const prisma = new PrismaClient();

export async function createUser(req: Request, reply: ResponseToolkit) {
  try {
    const {user} = req.payload as User;
    const users = await prisma.users.create({data:user});
    return reply.response(users);
  } catch (e) {
    console.error(e);
  }
}

export async function getAllUsers(req: Request, reply: ResponseToolkit) {
  try {
    const users = await prisma.users.findMany();
     return reply.response(users);
  } catch (e) {
    console.error(e);
  }
}
