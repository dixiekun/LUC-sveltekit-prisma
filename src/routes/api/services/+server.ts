import ImageResidential from "$lib/images/services/residential.webp"
import ImageDeepClean from "$lib/images/services/deep-cleaning.webp"
import ImageMoveInOut from "$lib/images/services/move-in-out.webp"
import ImageOffice from "$lib/images/services/office.webp"
import ImageOrganization from "$lib/images/services/organization.webp"
import ImageLaundry from "$lib/images/services/laundry.webp"

import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const services = [
    {
        heading: "Residential Cleaning",
        desc: "Designed to make your home shine and create a clean, comfortable living environment for you and your family.",
        serviceImage: ImageResidential,
        serviceUrl: "/residential-cleaning"
    }, 
    {
        heading: "Deep Cleaning",
        desc: "When it's time to give your home a comprehensive and intensive clean.",
        serviceImage: ImageDeepClean,
        serviceUrl: "/deep-cleaning"
    },
    {
        heading: "Move In/Out Cleaning",
        desc: "Move In/Out Cleaning service is here to make your transition smoother.",
        serviceImage: ImageMoveInOut,
        serviceUrl: "/move-in-out-cleaning"
    },
    {
        heading: "Office Cleaning",
        desc: "A clean and organized office environment contributes to increased productivity and a positive work atmosphere.",
        serviceImage: ImageOffice,
        serviceUrl: "/office-cleaning"
    },
    {
        heading: "Organization",
        desc: "An organized home brings a sense of tranquility and allows you to make the most of your living space.",
        serviceImage: ImageOrganization,
        serviceUrl: "/organization-cleaning"
    },
    {
        heading: "Laundry Service",
        desc: "Say goodbye to the never-ending laundry pile with our convenient and reliable Laundry Service.",
        serviceImage: ImageLaundry,
        serviceUrl: "/laundry-service"
    }
]

export const GET: RequestHandler = ({ request }) => {
  // Replace 'YOUR_AUTH_TOKEN' with your actual authorization token
  const authorizationHeader = 'Bearer YOUR_AUTH_TOKEN';

  // Check if the request contains the correct authorization header
  const requestAuthorizationHeader = request.headers.get('Authorization');
  if (requestAuthorizationHeader !== authorizationHeader) {
    return json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Respond with the services data
  return json( {services} );
};