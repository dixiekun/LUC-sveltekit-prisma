import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


export const GET = (async () => {
    const posts = await prisma.post.findMany({})

    return new Response(
        JSON.stringify(posts), 
        {status: 200}
    )
})
