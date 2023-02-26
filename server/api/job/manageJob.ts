import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    assertMethod(event, ['POST', 'PATCH', 'DELETE']);
    const body = await readBody(event)

    // add one job
    if (body.event === 'ADD_JOB'){
        const job = await prisma.job.create({
            data: {
                society: body.society,
                description: body.description,
            },
          })
        
          if(!job){
            throw createError({
              statusCode :404, 
              statusMessage : 'Job not created'});
            
          }
          return job;
    }
    // update job
    if (body.event === 'UPDATE_JOB'){
        try {
            const updatedJob = await prisma.job.update({
                where: { id: parseInt(body.id) },
                data: { society: body.society, description: body.description },
              
            });
            return updatedJob;
        } catch (error) {
            console.error(error);
        }
    
    }
    // delete job
    if (body.event === 'DELETE_JOB'){
        try {
            const updatedJob = await prisma.job.delete({
                where: { id: parseInt(body.id) }
            });
            return updatedJob;
        } catch (error) {
            console.error(error);
        }
    
    }
    
});