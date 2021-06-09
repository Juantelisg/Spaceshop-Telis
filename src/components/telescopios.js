import React from 'react';
import Card from './card.js';

const telescopios = [
    {   
        id: 1,
        title: '',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51Wa2gUJGYL._AC_SX425_.jpg',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet erat enim. Praesent vitae odio lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut sodales sapien. Duis vel sapien scelerisque, tempor ipsum eget, volutpat augue.'
    },
    { 
        id: 2, 
        title: 'Accesorios', 
        image: 'https://www.latercera.com/resizer/gWViHAcgmlXsZJHhQavnpPaUSLc=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/4SHGKOKSW5CTFCB2ZUIV5ZL264.jpg',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet erat enim. Praesent vitae odio lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut sodales sapien. Duis vel sapien scelerisque, tempor ipsum eget, volutpat augue.'
        
    },
    { 
        id: 3, 
        title: 'Accesorios', 
        image: 'https://juguetes10.com/wp-content/uploads/mejores-telescopios-para-ninos.jpg',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet erat enim. Praesent vitae odio lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut sodales sapien. Duis vel sapien scelerisque, tempor ipsum eget, volutpat augue.'
        
    }
   
];


function DivTelescopios() {

    function itemsDetails({ p }) {
        return p.details;
    }
    
    return (
        <div className="row">
            {
                telescopios.map(p => (
                                  
                <Card key={p.id} title={p.title} img={p.image} details={itemsDetails({ p })} />
                ))
            }
        </div>
    )
}
export default DivTelescopios;