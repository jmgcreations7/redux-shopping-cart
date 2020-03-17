import React, { Fragment } from 'react';
import Footer from '../SharedComponents/Footer/Footer';
import Header from '../SharedComponents/Header/Header';
import { connect } from 'react-redux';
// import './Checkout.css';


function mapStateToProps(props) {
    return {
        products:props.products,
       wishlist: props.wishlist,
       
    };
}
const WishList = (props) => {
    let items = props.wishlist;
    console.log("items",items);
    let products = props.products;
    let wishListItems = [];
    items.map( item => {
        let data = products.filter((product,index) =>item.id == product.id);
        wishListItems.push(data[0]);
    });
    console.log("WishList",wishListItems);
    return (
		<Fragment>    
            <Header/>
            
            <div className="Checkout">
                {
                wishListItems.map((cartitem,index) => {
                    return <div className="checkout">
                        <img src={cartitem.imageurl} height="100px" width="150px"/>
                        <img src="/assets/images/special.png" height="100" width="100"/>
                        <div className="datadiv">
                        <h4>Product Name : {cartitem.name}</h4> 
                        <h4>Price : Rs.{cartitem.price-((cartitem.price)*(cartitem.offer))/100}</h4>
                        </div>
                        <button type="button" id="delete">Delete</button> 
                    </div>
                    }) 
                }
                </div>
            <Footer/>
        </Fragment>
                
    );
}   
export default connect(mapStateToProps)(WishList);