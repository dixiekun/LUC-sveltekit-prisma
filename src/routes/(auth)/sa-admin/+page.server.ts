import { fail } from '@sveltejs/kit';
import type { Actions } from "./$types";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const actions: Actions = {
    createPost: async ( { request }) => {
        const {title, content } = Object.fromEntries(await request.formData()) as 
        {
            title: string
            content: string
        }
        
        try {
            await prisma.post.create({
                data: {
                    title,
                    content
                }
            })
        } catch (err) {
            console.error(err)
            return fail(500, { message: 'Could not create the post.'})
        }

        return {
            status: 201
        }
        
    }
}