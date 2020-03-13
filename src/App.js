import React from 'react';
import { createStore } from 'redux';
import Filter from './Component/Products/Filter/Filter';
import Product from './Component/Products/Products';
import { Provider } from 'react-redux';
import './App.css';
import ProductList from './Component/Products/ProductList/ProductList';
import Products from './Component/Products/Products';


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
      categoryId: 101,
      brandId: 1001,
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
      categoryId: 102,
      brandId: 1006,
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
      categoryId: 103,
      brandId: 1005,
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
      categoryId: 104,
      brandId: 1006,
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
      categoryId: 105,
      brandId: 1001,
    },
    {
      id: 6,
      name: 'Watch',
      imageurl: '',
      price: 2500,
      offer: 10,
      rating: 4,
      stockStatus: false,
      stockCount: 0,
      categoryId: 106,
      brandId: 1004,
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
      categoryId: 107,
      brandId: 1003,
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
      categoryId: 108,
      brandId: 1004,
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
      categoryId: 109,
      brandId: 1007,
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
      categoryId: 110,
      brandId: 1004,
    }
  ],
  categories:[
    {
      id: 101,
      name: 'Mobile',
    },
    {
      id: 102,
      name: 'Tv',
    },
    {
      id: 103,
      name: 'Laptop',
    },
    {
      id: 104,
      name: 'AC',
    },
    {
      id: 105,
      name: 'Fridge',
    },
    {
      id: 106,
      name: 'Watch',
    },
    {
      id: 107,
      name: 'Headset',
    },
    {
      id: 108,
      name: 'Powerbank',
    },
    {
      id: 109,
      name: 'Baby product',
    },
    {
      id: 110,
      name: 'Camera',
    },
  ],
  brands:[
    {
      id: 1001,
      name: 'Samsung',
    },
    {
      id: 1002,
      name: 'Redmi',
    },
    {
      id: 1003,
      name: 'Boat',
    },
    {
      id: 1004,
      name: 'Mi',
    },
    {
      id: 1005,
      name: 'Toshiba',
    },
    {
      id: 1006,
      name: 'LG',
    },
    {
      id: 1007,
      name: 'Max',
    },
  ],
  productPageIndex : 1,
    
  
}

function reducer(state = initialState, action) {
  console.log('reducer', state, action);
  return state;
}


const store = createStore(reducer);


const App = () => {
  return (
    <Provider store={store}>
    <div className="App">
      <Products/>
    </div>
    </Provider>
  );
}

export default App;
