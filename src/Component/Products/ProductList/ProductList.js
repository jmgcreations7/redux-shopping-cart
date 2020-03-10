import React, { Fragment } from 'react';
import { connect } from 'react-redux';


function mapStateToProps(props) {
    console.log("=========>",props.products);
   
    return {
    products: props.products

    };
  }
  const ProductList = (props) => {
         return props.products.map((item, index) => {
        return (
            <Fragment>
               <div class="gallery">
                    <a target="_blank" href="img_5terre.jpg">
                    <img src="/assets/images/photo.jpg" alt="" width="600" height="400"/>
                    </a>
                    <div class="desc"> {props.products[index].name}</div>
                </div>
        </Fragment>
            )
         })
    
  }

  export default connect(mapStateToProps)(ProductList);