import React, { Component } from 'react';
import './styles/header.css';
import CartIcon from './cartWidget.js';


function NavBar() {
    return(
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="#!">SpaceShop</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active"><a class="nav-link" href="#!">Inicio</a></li>
                        <li class="nav-item"><a class="nav-link" href="#!">Productos</a></li>
                        <li class="nav-item"><a class="nav-link" href="#!">Contacto</a></li>
                        <CartIcon/>
                    </ul>
                </div>
            </div>
        </nav>
   );
}

export default NavBar;