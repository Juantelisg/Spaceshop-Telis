import React, { useContext, useState } from 'react';
/* import { CheckOutContext } from './CheckoutContext'; */

function CheckOut(props) {
    /* const [checkOut, setCheckOut] = useContext(CheckOutContext); */
    const [cartItems, setCartItems] = useState(false);
    return(
        <div style={{position: 'absolute', width: '100%', zIndex: '2000', backgroundColor: 'white', top: '3.5rem'}}>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Precio</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row"></th>
                    <td>{props.tipo}</td>
                    <td>{props.name}</td>
                    <td>{props.price}</td>
                </tr>
                </tbody>
            </table>
        </div>        
    );
}

export default CheckOut;