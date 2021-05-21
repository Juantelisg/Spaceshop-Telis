import React from 'react';
import Card from './card.js';

const ofertas = [
    {   
        id: 1,
        title: '',
        image: 'https://cdn.shopify.com/s/files/1/0021/1723/8896/products/1_-_10888351257_716248860.jpg?v=1571747722'
    },
    { 
        id: 2, 
        title: 'Accesorios', 
        image: 'https://lampara3d.net/wp-content/uploads/2020/04/luna-3d.png',
        
    },
    { 
        id: 3, 
        title: 'Accesorios', 
        image: 'http://cdn.shopify.com/s/files/1/1305/2183/products/3D_Astronaut_mug_1_1200x630.jpg?v=1579888905',
        
    }
   
];


function DivOfertas() {
    return (
        <div className="row">
            {
                ofertas.map(p => (
                <Card key={p.id} title={p.title} img={p.image} />
                ))
            }
        </div>
    )
}
export default DivOfertas;