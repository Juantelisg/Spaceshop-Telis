import React, {useContext, useState} from 'react';
import { CheckOutContext } from './CheckoutContext';

export const CartContext = React.createContext();

export const CartProvider = (props) => {
    const [cart, setCart] = useState([]);
   

    return (
        <CartContext.Provider value={[cart, setCart]} >   
            {props.children}
        </CartContext.Provider>
    )
    
    
}
