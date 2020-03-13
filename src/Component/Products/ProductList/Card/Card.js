
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import './Card.css';


function mapStateToProps(props) {
    console.log("=========>",props.products);
   
    return {
    products: props.products

    };
  }
  const Card = (props) => {
        return (
            <Fragment>
               <div class="gallery">
                    <a target="_blank" href="#">
                    <img src="/assets/images/photo.jpg" alt="" width="600" height="400"/>
                    </a>
                    <div class="desc"> {props.products.name}</div>
                </div>
        </Fragment>
            )
    }

  export default connect(mapStateToProps)(Card);