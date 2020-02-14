import { SELECT_VENDOR } from '../constants/ActionTypes';

const initialState = [
  {
    id: 1,
    name: 'Freshly',
    description: 'Best fresh local food',
    link: 'https://www.freshly.com/',
    image: 'https://reactstrap.github.io/assets/318x180.svg',
    items: []
  },
  {
    id: 2,
    name: 'MealPro',
    description: 'Get big with us!',
    link: 'https://www.mealpro.net/',
    image: 'https://reactstrap.github.io/assets/318x180.svg',
    items: [
      {
        id: 1,
        name: 'Chicken rice bowl',
        description: 'loads of chicken breast',
        image: 'https://reactstrap.github.io/assets/318x180.svg',
        price: '15.95',
        vendor: 'http://127.0.0.1:8000/api/vendors/2/'
      },
      {
        id: 2,
        name: 'Beef Salad',
        description: 'Fresh veggies and wagyu',
        image: 'https://reactstrap.github.io/assets/318x180.svg',
        price: '12.75',
        vendor: 'http://127.0.0.1:8000/api/vendors/2/'
      }
    ]
  }
];

const vendors = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_VENDOR:
      return state;
    default:
      return state;
  }
};

export default vendors;
