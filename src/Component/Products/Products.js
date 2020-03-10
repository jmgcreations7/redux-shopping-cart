import React, { Fragment } from 'react';
import ProductList from './ProductList/ProductList';
import Header from './../SharedComponents/Header/Header';
import Footer from './../SharedComponents/Footer/Footer';
import Filter from './Filter/Filter';
 
const Products = () =>{
return(
    <Fragment>
    <Header/>
   <div className="container">
    <div className="row">
    <div className="col-xs-6">
    <Filter/>
    </div>
   <div className="col-xs-6 ">
    <ProductList/>
   </div>
    </div>
   </div>
    <Footer/>
    </Fragment>
);
}
export default Products;