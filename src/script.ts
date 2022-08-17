import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

let data = {
  role: 'Player',
  first_name: 'Mateus',
  last_name: 'Moreno',
  phone: 988278943,
  email: 'mtssmoreno@gmail.com',
  username: 'creztfallen',
  address: 'Rio de Janeiro',
  gender: 'Male',
  birth_date: new Date(1998, 4, 17),
  country_id: 'BR',
  city: 'Rio de Janeiro',
  category: '',
  document_id: '222244455',
  user_state: 'Rio de Janeiro',
};

export async function createUser() {
  const user = await prisma.users.create({
    data,
  });
  console.log(user)
}

createUser()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });