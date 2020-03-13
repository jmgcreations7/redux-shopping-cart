import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Card from './Card/Card';


import './ProductList.css';

function mapStateToProps(props) {
    console.log("hiiiiiiiiiii",props.productPageIndex);
    
   
    return {
    products: props.products,
    productPageIndex : props.productPageIndex
    

    };
  }
  const handleClick = (props) => {
      console.log("hiiiiiiiiiiiiiiiiiiiii",props.productPageIndex);
      let products = props.products
      let page = props.productPageIndex
      let showData = products.slice((page*6)+1, (page+1)*6)
      return showData.map((item,index) => {
            return <Card/>
            
        })
  }
  
  const ProductList = (props) => {
      let products = props.products;
      let page = 0;
      let showData = products.slice((page*6)+0, (page+1)*6);
      return (
          <Fragment>
            {
                showData.map((item,index) => { 
                    return <Card item= {item} index= {index} />               
                })
            }
                <button className="button" onClick = {(e) =>handleClick(props,e)}>Viewmore</button>
          </Fragment>
      );
        
        
}
  

  export default connect(mapStateToProps)(ProductList);