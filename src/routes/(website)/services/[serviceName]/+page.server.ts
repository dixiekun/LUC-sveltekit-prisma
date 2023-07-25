interface ServiceData {
    heading: string;
    desc: string;
    serviceImage: string;
    serviceUrl: string;
  }


export const load = async ({ fetch, params }) => {
    const serviceName = params.serviceName; // Assuming the parameter is named 'serviceName'
  
    const fetchServices = async () => {
      try {
        const authorizationHeader = 'Bearer YOUR_AUTH_TOKEN'; // Replace 'YOUR_AUTH_TOKEN' with your actual authorization token
  
        const res = await fetch(`/api/services`, {
          headers: {
            Authorization: authorizationHeader,
          },
        });
  
        const {services} = await res.json();
        const filteredServices = services.filter(
            (service: ServiceData) => service.serviceUrl === `/${serviceName}`
          );
       
        return filteredServices

      } catch (error) {
        // Handle fetch errors here if needed
        console.error('Error fetching data:', error);
        return [];
      }
    };
  
    // Fetch the filtered services data
    const serviceDataArray = await fetchServices();
    
    let serviceData;
    // convert data array to a single object
    if (Array.isArray(serviceDataArray) && serviceDataArray.length > 0) {
        serviceData = serviceDataArray[0];
    }

    return {
      serviceData
    }
  }
  