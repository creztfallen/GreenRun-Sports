import { PrismaClient } from '@prisma/client';
import { User } from '../interfaces/user';

const prisma = new PrismaClient();

export async function createUserRep(input: User) {
  try {
    const user = await prisma.users.create({ data: input });
    return user;
  } catch (e) {
    console.error({ message: e });
  }
}

export async function getUsersRep() {
  try {
    const user = await prisma.users.findMany();
    return user;
  } catch (e) {
    console.error({ message: e });
  }
}

export async function updateUserRep(id: Number, input: User) {
  try {
    const user = await prisma.users.update({
      where: { id: +id },
      data: input,
    });
    return user;
  } catch (e) {
    console.error({ message: e });
  }
}

export async function findUniqueRep(id: Number) {
  try {
    const user = await prisma.users.findUnique({
      where: { id: +id },
    });
    return user;
  } catch (e) {
    console.error({ message: e });
  }
}

export async function updateUserStateRep(id: Number, input: User) {
  try {
    const user = await prisma.users.update({
      where: { id: +id },
      data: {
        user_state: input.user_state,
      },
    });
    return user;
  } catch (e) {
    console.error({ message: e });
  }
}
