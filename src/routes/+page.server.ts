import type { PageServerLoad } from "./$types";


export const load = (async( {fetch}) => {
    const res = await fetch(`/api/posts`);
    const {data} = await res.json();
    const posts = data
    
    return {
        posts
    }

}) satisfies PageServerLoad