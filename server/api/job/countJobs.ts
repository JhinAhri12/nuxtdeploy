import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    assertMethod(event, ['GET']);
        try {
            const publishedJobs = await prisma.job.aggregate({
                _count : { _all: true}
            })
            return publishedJobs
        }
        catch (error) {
            console.log(error)
        }
    
})
