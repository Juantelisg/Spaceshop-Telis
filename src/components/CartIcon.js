import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { CheckoutContext } from './CheckoutContext';
import { BsBag } from "react-icons/bs";



function CartIcon() {
   

    return(
        <div>
            <BsBag color="white" size="1.5rem" style={{position: 'absolute', right: '2rem', zIndex: '2000', top: 15}}/>
        </div>        
    );
}

export default CartIcon;