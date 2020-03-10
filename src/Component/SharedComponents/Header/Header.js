
import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <a href="#default" className="logo"><img src="fb.svg" alt="ShoppingCart" height="24" width="20" /></a> 
            <div className="header-right">
                <a className="active" href={`/`}>Home</a>
                <a href="#about">About</a>
                <a href={`/contact`}>Contact</a>
            </div>
        </div>
    )
}
export default Header;