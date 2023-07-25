import type { PageServerLoad } from "./$types";

const authorizationHeader = 'Bearer YOUR_AUTH_TOKEN';

export const load = (async( {fetch}) => {

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
        services
    }

}) satisfies PageServerLoad