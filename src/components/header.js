import React, { Component } from 'react';
import './styles/header.css';
import CartIcon from './cartWidget.js';


function Header() {
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand logo" href="#">SpaceShop</a>

           
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
              <div className="collapse navbar-collapse" style={{ justifyContent: 'center'}}>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Productos</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Contacto</a>
                    </li>
                    <li classNameName="nav-item" style={{listStyle: 'none', display: 'flex', alignItems: 'center'}}>
                      <CartIcon/>
                    </li>
                  </ul>
              </div>
          </div>
      </nav>
   );
}

export default Header;