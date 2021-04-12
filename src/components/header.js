import React, { Component } from 'react';
import './styles/header.css';
import { BsBag } from "react-icons/bs";


function Header() {
    return(
    <div className="header">
        <div className="header-menu">
             
            <div className="div-logo">
              <a href="/" className="logo">Logo</a>
            </div>
            
         
            <div className="div-center-navbar">
              <nav className="center-navbar" >
                <ul>
                  <li>
                    <a href="/">Movies</a>
                  </li>
                  <li>
                    <a  href="/">Series</a>
                  </li>
                  <li>
                    <a href="/">Games</a>
                  </li>
                </ul>
              </nav>
            </div>


            <div className="div-right-navbar">
                <nav className="right-navbar">
                    <ul>
                      <li>
                      <BsBag/>
                      </li>
                      <li>
                      <a  href="/">Shop</a>
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