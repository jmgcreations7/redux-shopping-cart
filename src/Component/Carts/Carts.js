import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import './Carts.css';
import Footer from '../SharedComponents/Footer/Footer';
import Header from '../SharedComponents/Header/Header';

function mapStateToProps(props) {
    return {
        products: props.products
    };
  }

const Carts = (props) => {
    let items = props.products;
    const urlitem = props.match.params.id;

    let Data = items.filter((item,index) =>{
        return item.id == urlitem;
    });
    return (
		<Fragment>
            <Header/>
            <div className="cart" id="carts">
                <img src={Data[0].imageurl} height="200px" width="300px"/>
                <div className="datadiv">
                <img src="/assets/images/offer.png" height="100" width="100"/>
                <h4>Product Name : {Data[0].name}</h4>
                <h4>Price : Rs.{Data[0].price-((Data[0].price)*(Data[0].offer))/100}</h4>
                <h4>Quantity : {Data[0].quantity}</h4> 
                </div>
                <button type="button" id="delete">Delete</button> 
                
            </div>
            <Footer/>
        </Fragment>
    );
}

    

export default connect(mapStateToProps)(Carts);