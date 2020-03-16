import React, { Fragment } from 'react';
import Footer from '../SharedComponents/Footer/Footer';
import Header from '../SharedComponents/Header/Header';
import { connect } from 'react-redux';
import './Checkout.css';


function mapStateToProps(props) {
    return {
        products:props.products,
        cart: props.cart,
        cartTotal:props.cartTotal
    };
}
const Checkout = (props) => {
    let cartTotal = props.cartTotal;
    let items = props.cart;
    console.log("items",items);
    let products = props.products;
    let cartItems = [];
    items.map( item => {
        let data = products.filter((product,index) =>item.id == product.id);
        cartItems.push(data[0]);
    });
    console.log("Cart",cartItems);
    return (
		<Fragment>    
            <Header/>
            
            <div className="Checkout">
                {
                cartItems.map((cartitem,index) => {
                    return <div className="checkout">
                        <img src={cartitem.imageurl} height="100px" width="150px"/>
                        <img src="/assets/images/special.png" height="100" width="100"/>
                        <div className="datadiv">
                        <h4>Product Name : {cartitem.name}</h4> 
                        <h4>Price : Rs.{cartitem.price-((cartitem.price)*(cartitem.offer))/100}</h4>
                        </div>
                    </div>
                    }) 
                }
                </div>

                <div className="shippingAddr">
                <h2 id="order">Shipping Address</h2>   
                <img src="/assets/images/unnamed.png" height="55" width="55"/><br/>
                <input type="text" placeholder="Name:" id="addr"/><br/>
                <textarea id="addr">Address:</textarea><br/>
                <input type="text" placeholder="Mobile:" id="addr"/><br/>
                <button type="button" id="submit">Submit</button>
                </div>

                <div className="order">
                <h2 id="order">Order Summary</h2>   
                <img src="/assets/images/summary.png" height="100" width="100"/>
                <h3>Sub Total : Rs.{cartTotal}</h3>
                <h3>Shipping : Rs.50</h3>
                <h2>Total : Rs.{cartTotal+50}</h2>
                </div>
               
            
            <Footer/>
        </Fragment>
                
    );
}   
export default connect(mapStateToProps)(Checkout);