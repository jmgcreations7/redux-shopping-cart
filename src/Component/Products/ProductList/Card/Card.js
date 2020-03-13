import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import './Card.css';


function mapStateToProps(props) {
    console.log("=========>",props.products);
   
    return {
    products: props.products,
    productPageIndex : props.productPageIndex
    };
  }
  const handleClick = (props) => {
          console.log("hiiiiiiiiiiiiiiiiiiiii",props.productPageIndex);
          let products = props.products
          let page = props.productPageIndex
          // let showData = products.slice((page*6)+1, (page+1)*6)
          // return showData.map((item,index) => {
          //       return <Card/>
                
          //   })
      }
  const Card = (props) => {
      return (
          <Fragment>
             <div className="gallery">
                 <Link to ={`/products/${props.item.name}/${props.item.id}`}>
                      <img src={props.products[props.index].imageurl} id="listimg"/>
                      <div className="desc"> {props.products[props.index].name}</div>
                  </Link>
                  <div className="desc"><h4>Rs.{props.products[props.index].price-((props.products[props.index].price)*(props.products[props.index].offer))/100}</h4></div>
                  <Link to ={`/Cart`}>
                      <button type="button" id="addcart">Add to Cart</button> 
                  </Link>
              </div>
          </Fragment>
          )
    }
  export default connect(mapStateToProps)(Card); 