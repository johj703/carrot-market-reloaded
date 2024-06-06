import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function test() {
  const token = await db.sMSToken.findUnique({
    where: {
      id: 123123,
    },
    include: {
      user: true,
    },
  });
  console.log(token);
}
test();

export default db;
