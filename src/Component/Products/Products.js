import React, { Fragment } from 'react';
import ProductList from './ProductList/ProductList';
import Header from './../SharedComponents/Header/Header';
import Footer from './../SharedComponents/Footer/Footer';
import Filter from './Filter/Filter';

import './Products.css'; 


const Products = () =>{
    return(
        <Fragment>
            <Header/>
            <div id="productdiv">
                <Filter/>
                <div className="productdiv">
                <ProductList/>
                </div>
            </div>
            <Footer/>
        </Fragment>
    );
}
export default Products;