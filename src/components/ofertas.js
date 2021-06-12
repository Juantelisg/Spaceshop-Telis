import React from 'react';
import Card from './card.js';

const ofertas = [
    {   
        id: 1,
        title: 'Ofertas',
        image: 'https://cdn.shopify.com/s/files/1/0021/1723/8896/products/1_-_10888351257_716248860.jpg?v=1571747722',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet erat enim. Praesent vitae odio lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut sodales sapien. Duis vel sapien scelerisque, tempor ipsum eget, volutpat augue.'
    },
    { 
        id: 2, 
        title: 'Ofertas', 
        image: 'https://lampara3d.net/wp-content/uploads/2020/04/luna-3d.png',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet erat enim. Praesent vitae odio lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut sodales sapien. Duis vel sapien scelerisque, tempor ipsum eget, volutpat augue.'
        
    },
    { 
        id: 3, 
        title: 'Ofertas', 
        image: 'http://cdn.shopify.com/s/files/1/1305/2183/products/3D_Astronaut_mug_1_1200x630.jpg?v=1579888905',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet erat enim. Praesent vitae odio lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut sodales sapien. Duis vel sapien scelerisque, tempor ipsum eget, volutpat augue.'
        
    }
   
];


function DivOfertas() {

    function itemsDetails({ p }) {
        return p.details;
    }
    
    return (
        <div className="row">
            {
                ofertas.map(p => (
                <Card key={p.id} title={p.title} img={p.image} details={itemsDetails({ p })}/>
                ))
            }
        </div>
    )
}
export default DivOfertas;