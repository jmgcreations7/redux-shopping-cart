import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import './Cart.css';
import Footer from '../SharedComponents/Footer/Footer';
import Header from '../SharedComponents/Header/Header';

function mapStateToProps(props) {
    return {
        products:props.products,
        cart: props.cart
    };
}

const Cart = (props) => {
        let items = props.cart;
        console.log("items",items);
        let products = props.products;
        let cartItems = [];
        items.map( item => {
            let data = products.filter((product,index) =>item.id == product.id);
            cartItems.push(data[0]);
        });
        console.log("Cart",cartItems);

return <Fragment>
            <Header/>
            {
            cartItems.map((cartitem,index) => {
                return <div className="cart" id="carts">
                    <img src={cartitem.imageurl} height="200px" width="300px"/>
                    <div className="datadiv">
                    <img src="/assets/images/offer.png" height="100" width="100"/>
                    <h4>Product id : {cartitem.id}</h4>
                    <h4>Product Name : {cartitem.name}</h4> 
                    <h4>Price : Rs.{cartitem.price-((cartitem.price)*(cartitem.offer))/100}</h4>
                    </div>
                    <button type="button" id="delete">Delete</button> 
                </div>
                 }) 
            }
            <Footer/>
        </Fragment>
       
}
export default connect(mapStateToProps)(Cart);