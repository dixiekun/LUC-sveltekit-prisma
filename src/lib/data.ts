import { Status } from '@prisma/client';

export const posts = [
    {
        title: 'The Ultimate Guide to Deep Cleaning Your Home',
        content: 'Deep cleaning is more thorough than regular or spring cleaning. It reaches the deep grime and dirt in your home...',
        featuredImage: 'path/to/deep_cleaning_image.jpg',
        status: Status.draft,
        categories: ['Cleaning Tips'],
    },
    {
        title: 'Eco-friendly Home Cleaning Tips',
        content: 'Eco-friendly cleaning methods are effective for getting your home sparkling. They are safer for your health and the environment...',
        featuredImage: 'path/to/eco_friendly_image.jpg',
        status: Status.draft,
        categories: ['Green Living' ],
    },
    {
        title: 'DIY Natural Cleaning Solutions for Your Home',
        content: 'Switching to natural cleaning solutions can be both eco-friendly and effective. Learn how to make them at home...',
        featuredImage: 'path/to/diy_natural_cleaning.jpg',
        status: Status.published,
        categories: ['DIY Solutions' , 'Green Living' ],
    },
    {
        title: 'Organizing Your Living Room for Better Functionality',
        content: 'A well-organized living room can be both stylish and functional. Here are some tips...',
        featuredImage: 'path/to/living_room_organization.jpg',
        status: Status.draft,
        categories: ['Home Organization' ],
    },
    {
        title: 'Revamping Your Backyard: Tips and Ideas',
        content: 'Your backyard can be a personal oasis. Here are some home improvement tips to make it even better...',
        featuredImage: 'path/to/backyard_revamp.jpg',
        status: Status.published,
        categories: ['Lifestyle & Home Improvement' , 'Outdoor Maintenance' ],
    },
    {
        title: 'The Essential Guide to Green Living',
        content: 'Adopting a green lifestyle is easier than you think. Here’s a guide to get started...',
        featuredImage: 'path/to/green_living_guide.jpg',
        status: Status.draft,
        categories: ['Green Living' ],
    },
    {
        title: 'Top 5 DIY Home Improvement Projects',
        content: 'Looking for a weekend project? Here are some DIY home improvement ideas to elevate your space...',
        featuredImage: 'path/to/diy_home_projects.jpg',
        status: Status.published,
        categories: ['DIY Solutions' , 'Lifestyle & Home Improvement' ],
    },
    {
        title: 'Maintaining Your Lawn: A Seasonal Guide',
        content: 'A healthy lawn requires regular maintenance. Here’s a seasonal guide to keep your lawn green and lush...',
        featuredImage: 'path/to/lawn_maintenance.jpg',
        status: Status.draft,
        categories: ['Outdoor Maintenance' ],
    }
];
