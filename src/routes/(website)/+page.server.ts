import type { PageServerLoad } from "./$types";

const authorizationHeader = 'Bearer YOUR_AUTH_TOKEN';

export const load = (async( {fetch}) => {
    const res = await fetch(`/api/posts`);
    const posts = await res.json();
    
    const fetchServices = async () => {

        try {

          const res = await fetch(`/api/services`, {
            headers: {
              Authorization: authorizationHeader,
            },
          });
    
          const {services} = await res.json();

         
          return services
  
        } catch (error) {
          // Handle fetch errors here if needed
          console.error('Error fetching data:', error);
          return [];
        }
      }

    const services = await fetchServices()

    return {
        posts,
        services
    }

}) satisfies PageServerLoad