import { Request, ResponseToolkit } from '@hapi/hapi';
import { PrismaClient } from '@prisma/client';
import { User } from '../interfaces/user';

const prisma = new PrismaClient();

export async function createUser(req: Request, reply: ResponseToolkit) {
  try {
    const { user } = req.payload as User;

    const users = await prisma.users.create({ data: user });
    return reply.response(users);
  } catch (e) {
    console.error({ message: e });
  }
}

export async function getAllUsers(req: Request, reply: ResponseToolkit) {
  try {
    const users = await prisma.users.findMany();
    return reply.response(users);
  } catch (e) {
    console.error({ message: e });
  }
}

export async function getOneUser(req: Request, reply: ResponseToolkit) {
  try {
    const { userId } = req.params;

    const user = await prisma.users.findUnique({
      where: {
        id: +userId,
      },
    });

    if (user === null) {
      throw new Error();
    }

    return reply.response(user);
  } catch (e) {
    console.error({ message: e });
  }
}

export async function updateUser(req: Request, reply: ResponseToolkit) {
  try {
    const { userId } = req.params;
    const { user } = req.payload as User;

    const userUpdate = await prisma.users.update({
      where: {
        id: +userId,
      },
      data: user,
    });

    return reply.response(userUpdate);
  } catch (e) {
    console.error({ message: e });
  }
}

export async function updateUserState(req: Request, reply: ResponseToolkit) {
  try {
    const { userId } = req.params;
    const { user } = req.payload as User;

    const userCheck = await prisma.users.findUnique({
      where: { id: +userId },
    });

    if (userCheck?.role.toLocaleLowerCase() === 'admin') {
      console.error('You cannot block other admins.');
      return reply.response('You cannot block other admins.');
    }
    const users = await prisma.users.update({
      where: {
        id: +userId,
      },
      data: {
        user_state: user.user_state,
      },
    });

    return reply.response(users);
  } catch (e) {
    console.error({ message: e });
  }
}
