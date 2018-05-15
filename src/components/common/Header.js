import React from 'react';
import logo from './logo.png';
import './Header.css';


const Header = () => {

    return(
        <div className="Header">
            <img src={logo} alt="react-coin-logo" className="Header-logo" />
        </div>
    )
}

export default Header;
