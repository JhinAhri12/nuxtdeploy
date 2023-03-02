import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    assertMethod(event, ['POST', 'PATCH', 'DELETE']);
    const body = await readBody(event)

    // add one job application
    if (body.event === 'IS_ADMIN'){
        const user = await prisma.user.findFirst({
            where: {
              email: body.email,
            },
          });
          return user;
    }
})