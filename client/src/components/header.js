import React from 'react';
import logo from './MYtineraryLogo.png';
import {Link} from 'react-router-dom';
import '../App.css';

function Header(){
    return(
        <Link to='/'>
            <img src={logo} className="App-logo" alt="logo" />
        </Link>
    )
}
export default Header;