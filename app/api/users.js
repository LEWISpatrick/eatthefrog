// pages/api/createUser.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function main() {
  const user = await prisma.user.create({
    data: {
      user: 'patrick',
      email: 'butt@gmailcon',
      age: 27,
    }

  });
  console.log('created user:', user);
}

main()
 .catch(e => { 
  console.error(e.message);
 })
 .finally(async () => {
  await prisma.$disconnect();
 });