import React from 'react';
import { Link } from "react-router-dom";

import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <Link to ={`/`}>
                <img src="/assets/images/logo.jpg" 
                alt="ShoppingCart" 
                height="30" 
                width="40" />
            </Link>
            <div className="header-right">
                <a className="active" href={`/`}>Home</a>
                <a href="#about">About</a>
                <a href={`/Cart`}>My Cart</a>
                <a href={"#contact"}>Contact</a>
            </div>
        </div>
    )
}
export default Header;