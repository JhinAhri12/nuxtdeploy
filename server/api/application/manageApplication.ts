import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    assertMethod(event, ['POST', 'PATCH', 'DELETE']);
    const body = await readBody(event)

    // add one job application
    if (body.event === 'APPLICATION_JOB'){

        // on cherche l'utilisateur
        let user = await prisma.user.findFirst({
            where: {
              email: body.email,
            },
          });
        // si l'utilisateur n'existe pas on le créer
        if(!user)
        {
            user = await prisma.user.create({
                data: {
                    email: body.email
                }
            })
        }
        // on créer la relation "postuler"
        const application = await prisma.application.create({
            data: {
                user: {
                    connect: { email: body.email}
                },
                job: {
                    connect: { society: body.society}
                }
            },
          })

        if (!application) {
            throw createError({
              statusCode: 404,
              statusMessage: 'Application not created',
            });
        }else{
            return application 
        }
        
        }
});