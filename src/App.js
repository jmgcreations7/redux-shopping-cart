import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './App.css';
import DetailedCard from './Component/Products/ProductList/DetailedCard/DetailedCard';
import Products from './Component/Products/Products';
import Carts from './Component/Carts/Carts';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const initialState = {
  products:[
    {
      id: 1,
      name: 'Mobile',
      imageurl: '/assets/images/mobile.jfif',
      price: 15000,
      offer: 10,
      rating: 3,
      stockStatus: true,
      stockCount: 20,
      quantity:1,
      categoryId: 101,
      brandId: 1001,
    },
    {
      id: 2,
      name: 'TV',
      imageurl: '/assets/images/tv.jfif',
      price: 10000,
      offer: 10,
      rating: 4,
      stockStatus: false,
      stockCount: 0,
      quantity:1,
      categoryId: 102,
      brandId: 1006,
    },
    {
      id: 3,
      name: 'Laptop',
      imageurl: '/assets/images/laptop.jfif',
      price: 45000,
      offer: 20,
      rating: 4,
      stockStatus: true,
      stockCount: 15,
      quantity:1,
      categoryId: 103,
      brandId: 1005,
    },
    {
      id: 4,
      name: 'AC',
      imageurl: '/assets/images/ac.jfif',
      price: 25000,
      offer: 10,
      rating: 5,
      stockStatus: true,
      stockCount: 10,
      quantity:1,
      categoryId: 104,
      brandId: 1006,
    },
    {
      id: 5,
      name: 'Fridge',
      imageurl: '/assets/images/fridge.jfif',
      price: 20000,
      offer: 20,
      rating: 5,
      stockStatus: true,
      stockCount: 5,
      quantity:1,
      categoryId: 105,
      brandId: 1001,
    },
    {
      id: 6,
      name: 'Watch',
      imageurl: '/assets/images/watch.jfif',
      price: 2500,
      offer: 10,
      rating: 4,
      stockStatus: false,
      stockCount: 0,
      quantity:1,
      categoryId: 106,
      brandId: 1004,
    },
    {
      id: 7,
      name: 'Headset',
      imageurl: '/assets/images/headset.jfif',
      price: 450,
      offer: 10,
      rating: 3,
      stockStatus: true,
      stockCount: 25,
      quantity:1,
      categoryId: 107,
      brandId: 1003,
    },
    {
      id: 8,
      name: 'PowerBanks',
      imageurl: '/assets/images/powerbank.jfif',
      price: 1000,
      offer: 10,
      rating: 4,
      stockStatus: true,
      stockCount: 7,
      quantity:1,
      categoryId: 108,
      brandId: 1004,
    },
    {
      id: 9,
      name: 'BabyProduct',
      imageurl: '/assets/images/babyproducts.jpg',
      price: 500,
      offer: 10,
      rating: 5,
      stockStatus: true,
      stockCount: 9,
      quantity:1,
      categoryId: 109,
      brandId: 1007,
    },
    {
      id: 10,
      name: 'Camera',
      imageurl: '/assets/images/camera.jpg',
      price: 35000,
      offer: 20,
      rating: 5,
      stockStatus: false,
      stockCount: 3,
      quantity:1,
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
  cart:[
    {id:'', quantity:''}
]
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
      <Router>
        <Switch>
          <Route exact path="/" component={Products} /> 
          <Route exact path="/Carts/:id" component={Carts} /> 
          <Route exact path="/products/:name/:id" component={DetailedCard} />
        </Switch>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
