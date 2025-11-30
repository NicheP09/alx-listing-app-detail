export const API_URL = 'https://api.example.com';
export const APP_NAME = 'ALX Listing App';

export const PROPERTYLISTINGSAMPLE = [
  {
    name: 'Villa Ocean Breeze',
    address: {
      state: 'Seminyak',
      city: 'Bali',
      country: 'Indonesia',
    },
    rating: 4.89,
    category: ['Luxury Villa', 'Pool', 'Free Parking'],
    price: 3200,
    offers: {
      bed: '3',
      shower: '3',
      occupants: '4-6',
    },
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    discount: '',
    description: 'Escape to paradise in this stunning luxury villa located in the heart of Seminyak. Featuring a private pool, modern amenities, and just steps away from the beach, this is the perfect getaway for families or groups of friends.',
    reviews: [
      {
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        name: 'John Doe',
        rating: 5,
        comment: 'Amazing place! The pool was fantastic and the location is unbeatable.',
      },
      {
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        name: 'Jane Smith',
        rating: 4,
        comment: 'Great villa, very spacious. The host was very responsive.',
      },
    ],
  },
  {
    name: 'Mountain Retreat Cabin',
    address: {
      state: 'Aspen',
      city: 'Colorado',
      country: 'USA',
    },
    rating: 4.95,
    category: ['Cabin', 'Mountain View', 'Fireplace'],
    price: 450,
    offers: {
      bed: '2',
      shower: '1',
      occupants: '2-4',
    },
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    discount: '10% OFF',
    description: 'Cozy up in this charming mountain cabin. Enjoy breathtaking views, a warm fireplace, and easy access to hiking trails and ski slopes.',
    reviews: [
      {
        avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
        name: 'Mike Johnson',
        rating: 5,
        comment: 'The perfect winter getaway. Highly recommend!',
      },
    ],
  },
];
