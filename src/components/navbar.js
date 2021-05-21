import React, { Component } from 'react';
import './styles/navBar.css';
import CartIcon from './cartWidget.js';


function NavBar() {
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{position: 'fixed', width: '100%', zIndex: '1000'}}>
            <div className="container">
                <a className="navbar-brand" href="#!">SpaceShop</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active"><a className="nav-link" href="#!">Inicio</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">Productos</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">Contacto</a></li>
                    </ul>
                    <CartIcon/>
                </div>
            </div>
        </nav>
   );
}

export default NavBar ;
