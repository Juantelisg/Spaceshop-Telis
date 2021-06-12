import React, {useState} from 'react';

export const CheckoutContext = React.createContext();

export const CheckoutProvider = (props) => {
    const [checkout, setCheckout] = useState(false);
    return (
        <CheckoutProvider.Provider value={[checkout, setCheckout]} >   
            {props.children}
        </CheckoutProvider.Provider>
    )
    
    
} 
