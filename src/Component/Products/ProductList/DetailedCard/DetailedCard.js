import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import StarRatings from 'react-star-ratings';
import { connect } from 'react-redux';

import Carts from '../../../Cart/Cart';

import Header from '../../../SharedComponents/Header/Header';
import Footer from '../../../SharedComponents/Footer/Footer';

import './Detailedcard.css';

function mapStateToProps(props) {
    return {
        products: props.products
    };
  }
  const addCart = () => {

  }

const DetailedCard = (props) => {
    let items = props.products;
    const urlitem = props.match.params.id;
    let Data = items.filter((item,index) => {return item.id == urlitem;});
    return (
		<Fragment>    
            <Header/>
            <div className="Detailedcard">
                <span className="offer">{Data[0].offer}%Off</span> 
                <img src={Data[0].imageurl} height="200px" width="200px"/>
                <h3><strike>Rs.{Data[0].price}</strike><img src="/assets/images/offer.png" height="100" width="70"/>
                Rs.{Data[0].price-((Data[0].price)*(Data[0].offer))/100}</h3>
                <h3>{Data[0].name}</h3>  
                <h5>
                    <StarRatings
                        rating={Data[0].rating}
                        starRatedColor="#8d4343"
                        numberOfStars={5}
                        name='rating'
                        starDimension="25px"
        
                    />
                </h5> 
                <h4>{Data[0].stockCount<10 && `${Data[0].stockCount} items left!!`}</h4>
                <h4>{Data[0].stockCount == 0 && 'Out ofStock'}</h4>
                <Link to ={`/Cart`}>
                <button type="button" id="addcart" onClick={addCart} >Add to Cart</button> 
                </Link>
            </div>
            <Footer/>
        </Fragment>
    );
}
export default  connect(mapStateToProps)(DetailedCard);