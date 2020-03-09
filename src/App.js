import React from 'react';
import { createStore } from 'redux';
import './App.css';


const initialState = {
  products:[
    {
      id: 1,
      name: 'Mobile',
      imageurl: '',
      price: 15000,
      offer: 10,
      rating: 3,
      stockStatus: true,
      stockCount: 20,
      categoryId: '01',
      brandId: '001',
    },
    {
      id: 2,
      name: 'TV',
      imageurl: '',
      price: 10000,
      offer: 10,
      rating: 4,
      stockStatus: false,
      stockCount: 0,
      categoryId: '02',
      brandId: '006',
    },
    {
      id: 3,
      name: 'Laptop',
      imageurl: '',
      price: 45000,
      offer: 20,
      rating: 4,
      stockStatus: true,
      stockCount: 15,
      categoryId: '03',
      brandId: '005',
    },
    {
      id: 4,
      name: 'AC',
      imageurl: '',
      price: 25000,
      offer: 10,
      rating: 5,
      stockStatus: true,
      stockCount: 10,
      categoryId: '04',
      brandId: '006',
    },
    {
      id: 5,
      name: 'Fridge',
      imageurl: '',
      price: 20000,
      offer: 20,
      rating: 5,
      stockStatus: true,
      stockCount: 5,
      categoryId: '05',
      brandId: '001',
    },
    {
      id: 6,
      name: Watch,
      imageurl: '',
      price: 2500,
      offer: 10,
      rating: 4,
      stockStatus: false,
      stockCount: 0,
      categoryId: '06',
      brandId: '004',
    },
    {
      id: 7,
      name: 'Headset',
      imageurl: '',
      price: 450,
      offer: 10,
      rating: 3,
      stockStatus: true,
      stockCount: 25,
      categoryId: '07',
      brandId: '003',
    },
    {
      id: 8,
      name: 'Power banks',
      imageurl: '',
      price: 1000,
      offer: 10,
      rating: 4,
      stockStatus: true,
      stockCount: 7,
      categoryId: '08',
      brandId: '004',
    },
    {
      id: 9,
      name: 'Baby Product',
      imageurl: '',
      price: 500,
      offer: 10,
      rating: 5,
      stockStatus: true,
      stockCount: 9,
      categoryId: '09',
      brandId: '007',
    },
    {
      id: 10,
      name: 'Camera',
      imageurl: '',
      price: 35000,
      offer: 20,
      rating: 5,
      stockStatus: false,
      stockCount: 3,
      categoryId: '10',
      brandId: '004',
    }
  ],
  categories:[
    {
      id: 01,
      name: 'Mobile',
    },
    {
      id: 02,
      name: 'Tv',
    },
    {
      id: 03,
      name: 'Laptop',
    },
    {
      id: 04,
      name: 'AC',
    },
    {
      id: 05,
      name: 'Fridge',
    },
    {
      id: 06,
      name: 'Watch',
    },
    {
      id: 07,
      name: 'Headset',
    },
    {
      id: 08,
      name: 'Powerbank',
    },
    {
      id: 09,
      name: 'Baby product',
    },
    {
      id: 10,
      name: 'Camera',
    },
  ],
  brands:[
    {
      id: '001',
      name: 'Samsung',
    },
    {
      id: '002',
      name: 'Redmi',
    },
    {
      id: '003',
      name: 'Boat',
    },
    {
      id: '004',
      name: 'Mi',
    },
    {
      id: '005',
      name: 'Toshiba',
    },
    {
      id: '006',
      name: 'LG',
    },
    {
      id: '007',
      name: 'Max',
    },
  ]
}

function reducer(state = initialState, action) {
  console.log('reducer', state, action);
  return state;
}


const store = createStore(reducer);


const App = () => {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
