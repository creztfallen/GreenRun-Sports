import { Request, ResponseToolkit, ResponseObject } from '@hapi/hapi';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createUser(req: Request, reply: ResponseToolkit) {
  try {let data = {
    role: 'Player',
    first_name: 'Mateus',
    last_name: 'Moreno',
    phone: '27988278943',
    email: 'poetadegiz@gmail.com',
    username: 'seila',
    address: 'Rio de Janeiro',
    gender: 'Male',
    birth_date: new Date(1998, 4, 17),
    country_id: 'BR',
    city: 'Rio de Janeiro',
    category: '',
    document_id: '22222222',
    user_state: 'Rio de Janeiro',
  };
  const user = await prisma.users.create({
    data,
  });
  reply.response(user);
} catch (e) {
    console.error(e);
}
}
