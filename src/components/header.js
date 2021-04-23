import React, { Component } from 'react';
import './styles/header.css';
import CartIcon from './cartWidget.js';


function Header() {
    return(
    <div className="header">
        <div className="header-menu">
             
            <div className="div-logo">
              <a href="/" className="logo">Spaceshop</a>
            </div>
        


            <div className="div-right-navbar">
                <nav className="right-navbar">
                    <ul >
                      <li>
                        <CartIcon/>
                      </li>
                      <li>
                        <a  href="/">Productos</a>
                      </li>
                      <li>
                        <a  href="/">Log In</a>
                      </li>
                    </ul>
                </nav>
            </div>
 
        </div>
    </div>
   );
}





export default Header;