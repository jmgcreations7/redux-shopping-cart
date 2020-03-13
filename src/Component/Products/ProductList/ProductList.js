import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import './ProductList.css';

function mapStateToProps(props) {
    // console.log("=========>",props.products);
    return {
    products: props.products
    };
  }
  const ProductList = (props) => {
         return props.products.map((item, index) => {
        return (
            <Fragment>
               <div className="gallery">
                   <Link to ={`/products/${item.name}/${item.id}`}>
                        <img src={props.products[index].imageurl} id="listimg"/>
                        <div className="desc"> {props.products[index].name}</div>
                    </Link>
                    <div className="desc"><h4>Rs.{props.products[index].price-((props.products[index].price)*(props.products[index].offer))/100}</h4></div>
                    <Link to ={`/Carts/${item.id}`}>
                        <button type="button" id="addcart">Add to Cart</button> 
                    </Link>
                </div>
            </Fragment>
            )
         })   
  }
  export default connect(mapStateToProps)(ProductList);