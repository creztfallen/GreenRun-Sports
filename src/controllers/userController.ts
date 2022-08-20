import { Request, ResponseToolkit } from '@hapi/hapi';
import { User } from '../interfaces/user';
import {
  createUserRep,
  findUniqueRep,
  getUsersRep,
  updateUserRep,
  updateUserStateRep,
} from '../repositories/userRep';

export async function createUser(req: Request, reply: ResponseToolkit) {
  try {
    const user = req.payload as User;
    const users = await createUserRep(user);

    return reply.response(users);
  } catch (e) {
    console.error({ message: e });
  }
}

export async function getAllUsers(req: Request, reply: ResponseToolkit) {
  try {
    const users = await getUsersRep();
    return reply.response(users);
  } catch (e) {
    console.error({ message: e });
  }
}

export async function updateUser(req: Request, reply: ResponseToolkit) {
  try {
    const { userId } = req.params;
    const user = req.payload as User;

    const userUpdate = await updateUserRep(userId, user);

    return reply.response(userUpdate);
  } catch (e) {
    console.error({ message: e });
  }
}

export async function updateUserState(req: Request, reply: ResponseToolkit) {
  try {
    const { userId } = req.params;
    const user = req.payload as User;

    const userCheck = await findUniqueRep(userId);

    if (userCheck?.role.toLowerCase() === 'admin') {
      console.error('You cannot block other admins.');
      return reply.response('You cannot block other admins.');
    }
    const users = await updateUserStateRep(userId, user);

    return reply.response(users);
  } catch (e) {
    console.error({ message: e });
  }
}
