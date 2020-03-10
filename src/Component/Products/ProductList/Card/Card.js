
import React, { Fragment } from 'react';
import './Card.css';

const Card = () => {
    return (
		<Fragment>
            <div className="card">
                <img src="a.jpg" height="100px" width="100px"/>
                <h4>Name</h4>
                <h5>Brand</h5>  
            </div>
        </Fragment>
    );
}

    

export default Card;