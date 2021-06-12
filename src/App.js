import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route ,Link} from "react-router-dom"
import NavBar from './components/navbar.js';
import Home from './components/home.js';
import Footer from './components/footer.js';
import CartIcon from './components/CartIcon.js';
import Checkout from './components/CartItems';


function App() {
  return (
      <div className="App">
        <CartIcon/>
        <NavBar/> 
        <Checkout/>
        <Home />  
        <Footer />           
      </div>
  );

}

export default App;
 
