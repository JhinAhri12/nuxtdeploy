import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    assertMethod(event, ['GET']);
    const strQuery = await getQuery(event)

    // sort the job 
    if (strQuery.query === 'orderBy')
    {
        try {
            const jobs = await prisma.job.findMany({
                orderBy: { society: 'asc'},
                take: 6,
            });
            return jobs;
        }
        catch (error) {
            console.log(error)
        }
    } 
    // get one job
    if (strQuery.query === 'getById')
    {
        try {
            const job = await prisma.job.findFirst({
                where: {id: parseInt(strQuery.params) }
            });
            return job;
        }
        catch (error) {
            console.log(error)
        }
    }   
    // default take 6 job
    else
    {
        try {
            const jobs = await prisma.job.findMany({
                orderBy: { id: 'desc'},
                take: 6,
            });
            return jobs;
        }
        catch (error) {
            console.log(error)
        }
    }
})
