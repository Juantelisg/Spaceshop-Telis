import React from 'react';
import Card from './card.js';

const indumentaria = [
    {   
        id: 1,
        title: 'Indumentaria',
        image: 'https://m.media-amazon.com/images/I/B1i3u9-Q-KS._CLa%7C2140%2C2000%7CB1hUTWJTcdS.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX342_.png'
    },
    { 
        id: 2, 
        title: 'Accesorios', 
        image: 'https://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/AfkAAOSw9F9dek5o/%24_57.JPG?set_id=8800005007',
        
    },
    { 
        id: 3, 
        title: 'Otros', 
        image: 'https://www.dhresource.com/0x0/f2/albu/g10/M00/68/15/rBVaWVzRJ_GACBn9AADhK7423ZA465.jpg',
        className: 'nav-link'
    }
   
];


function DivCamisas() {
    return (
        <div className="row">
            {
                indumentaria.map(p => (
                <Card key={p.id} title={p.title} img={p.image} />
                ))
            }
        </div>
    )
}
export default DivCamisas;