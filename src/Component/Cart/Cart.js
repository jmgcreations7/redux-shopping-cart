import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import './Cart.css';
import Footer from '../SharedComponents/Footer/Footer';
import Header from '../SharedComponents/Header/Header';
import { Link } from 'react-router-dom';

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
                    <img src={cartitem.imageurl} height="100px" width="150px"/>
                    <div className="datadiv">
                    <img src="/assets/images/offer.png" height="70" width="100"/>
                    <h4>Product Name : {cartitem.name}</h4> 
                    <h4>Price : Rs.{cartitem.price-((cartitem.price)*(cartitem.offer))/100}</h4>
                    </div>
                    <button type="button" id="delete">Delete</button> 
                </div>
                 }) 
            }
            <div> 
                <Link to ={`/Checkout`}>
                <button type="button" id="checkout">Checkout</button>
                </Link>
                </div>
            <Footer/>
        </Fragment>
       
}
export default connect(mapStateToProps)(Cart);