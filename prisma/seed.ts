
import { PrismaClient } from "@prisma/client";
import { posts} from '../src/lib/data'

const prisma = new PrismaClient()

async function main() {
    // Fetch existing user
    const existingUser = await prisma.user.findUnique({
        where: {
            email: "dixie@successamp.com"
        }
    });

    if (!existingUser) {
        throw new Error('User not found');
    }

    // Fetch all categories from the database
    const allCategories = await prisma.category.findMany();

    // Create posts
    for (const post of posts) {
        // Map category names from the post data to their IDs
        const categoryIDs = post.categories.map(name => {
            const category = allCategories.find(cat => cat.name === name);
            return category ? category.id : undefined;
        }).filter(id => id !== undefined);  // Use undefined instead of null
        

        await prisma.post.create({
            data: {
                ...post,
                categories: {
                    connect: categoryIDs.map(id => ({ id })),
                },
                authorID: existingUser.id // Link post to the existing user using authorID
            },
        });
    }
}
main()
    .catch((e)=> {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })