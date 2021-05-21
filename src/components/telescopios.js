import React from 'react';
import Card from './card.js';

const telescopios = [
    {   
        id: 1,
        title: '',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51Wa2gUJGYL._AC_SX425_.jpg'
    },
    { 
        id: 2, 
        title: 'Accesorios', 
        image: 'https://www.latercera.com/resizer/gWViHAcgmlXsZJHhQavnpPaUSLc=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/4SHGKOKSW5CTFCB2ZUIV5ZL264.jpg',
        
    },
    { 
        id: 3, 
        title: 'Accesorios', 
        image: 'https://juguetes10.com/wp-content/uploads/mejores-telescopios-para-ninos.jpg',
        
    }
   
];


function DivTelescopios() {
    return (
        <div className="row">
            {
                telescopios.map(p => (
                <Card key={p.id} title={p.title} img={p.image} />
                ))
            }
        </div>
    )
}
export default DivTelescopios;