import React from 'react';
import Card from './card.js';

const accesorios = [
    {   
        id: 1,
        title: 'Indumentaria',
        image: 'https://www.dhresource.com/0x0/f2/albu/g8/M00/71/71/rBVaV1116PyATcCZAAIUpwlb7yQ954.jpg'
    },
    { 
        id: 2, 
        title: 'Accesorios', 
        image: 'https://i.pinimg.com/originals/0c/dc/e2/0cdce2996a249dbc542c250ba0a6eb70.jpg',
        
    },
    { 
        id: 3, 
        title: 'Accesorios', 
        image: 'https://images-na.ssl-images-amazon.com/images/I/61-qBzPVNCL._AC_SX522_.jpg',
        
    }
   
];


function DivAccesorios() {
    return (
        <div className="row">
            {
                accesorios.map(p => (
                <Card key={p.id} title={p.title} img={p.image} />
                ))
            }
        </div>
    )
}
export default DivAccesorios;