import React, { Fragment } from 'react';
import Header from '../../SharedComponents/Header/Header';
import InputRange from 'react-input-range';
import { connect } from 'react-redux';
import StarRatings from 'react-star-ratings';
import 'react-input-range/lib/css/index.css'; 
import './Filter.css';
import Card from '../ProductList/Card/Card';
import ProductList from '../ProductList/ProductList';

function mapStateToProps(state) {
    // console.log("+++++++",state);
    return {};
  }
const Filter = (state) => {
    // console.log("=========>",state);

    return (
        <Fragment>
            <div className= "filter-section">
                <img src="/assets/images/offer.png" height="200" width="150"/>
                <h3 className= "filterby" >Filter By</h3>
                <div id="toggle-filter" className= "filter hide-filter">
                    <div className= "sort-by">
                        <h4 className= "filter-heading">Categories</h4>
                        <div className= "custom-control custom-checkbox">
                            <input 
                                type="radio" 
                                className= "custom-control-input" 
                                name= "sortBy" 
                                id= "near-by"
                                value= "0"
                                onClick
                            />
                            <label className= "custom-control-label sort" htmlFor= "near-by">Mobile</label>
                        </div>
                        <div className= "custom-control custom-checkbox">
                            <input 
                                type="radio" 
                                className= "custom-control-input" 
                                name= "sortBy"
                                id= "recent"
                                value= "1"
                            />
                            <label className= "custom-control-label sort" htmlFor= "recent">TV</label>
                        </div>
                        <div className= "custom-control custom-checkbox">
                            <input 
                                type="radio" 
                                className= "custom-control-input" 
                                name= "sortBy"
                                id= "priority"
                                value= "2"
                            />
                            <label className= "custom-control-label sort" htmlFor="priority">Laptop</label>
                        </div>
                    </div>
                    
                    <div className= "criticality">
                        <h4 className= "filter-heading">Brands</h4>
                        <div className= "custom-control custom-checkbox">
                            <input 
                                type="checkbox" 
                                className= "custom-control-input" 
                                name= "criticality" 
                                id= "high"
                                value= "Terminal"
                               
                            />
                            <label className= "custom-control-label" htmlFor="high">Samsung</label>
                        </div>
                        <div className= "custom-control custom-checkbox">
                            <input 
                                type="checkbox" 
                                className= "custom-control-input" 
                                name= "criticality" 
                                id= "medium"
                                value= "Mid Term"
                            />
                            <label className= "custom-control-label" htmlFor="medium">LG</label>
                        </div>
                        <div className= "custom-control custom-checkbox">
                            <input 
                                type="checkbox" 
                                className= "custom-control-input" 
                                name= "criticality" 
                                id= "low"
                                value= "Initial"
                            />
                             <label className= "custom-control-label" htmlFor="low">Redmi</label>
                        </div>
                    </div>

                    <div className= "criticality">
                        <h4 className= "filter-heading">User Reviews</h4>
                        <p> 
                        <StarRatings
                        rating={4}
                        starRatedColor="#8d4343"
                        numberOfStars={5}
                        name='rating'
                        starDimension="20px"
                        />
                        </p>
                    </div>

                    <div className="donation-range" name="donationAmt">
                        <h4 className="filter-heading">Price Range</h4>
                        <InputRange
                            maxValue={100}
                            minValue={0}
                            name="donationAmt"
                        />
                    </div>
                    <div className= "sort-by">
                        <h4 className= "filter-heading">Discount</h4>
                        <img src="/assets/images/discount.png" height="150" width="150"/>
                        <button type="button" id="offer">10%</button>
                        <button type="button" id="offer">20%</button>
                    </div>
                 </div>     
            </div>
        </Fragment>
          
    )
    
};

export default connect(mapStateToProps)(Filter);