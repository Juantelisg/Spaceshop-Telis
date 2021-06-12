import React from 'react';
import Card from './card.js';

const covid19 = [
    {   
        id: 1,
        title: 'Covid-Mask',
        image: 'https://cdn11.bigcommerce.com/s-k77di/images/stencil/1280x1280/products/2559/9854/mask_apollo_50__29317.1596835475.jpg?c=2',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet erat enim. Praesent vitae odio lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut sodales sapien. Duis vel sapien scelerisque, tempor ipsum eget, volutpat augue.'
    },
    { 
        id: 2, 
        title: 'Covid-Mask', 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0aophsRAbcFsIA1lA1AO3VEy5ML9MQxbXgg&usqp=CAU',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet erat enim. Praesent vitae odio lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut sodales sapien. Duis vel sapien scelerisque, tempor ipsum eget, volutpat augue.'
        
    },
    { 
        id: 3, 
        title: 'Covid-Mask', 
        image: 'https://i.etsystatic.com/10622164/c/667/530/0/88/il/6989d0/2302113252/il_340x270.2302113252_1u1g.jpg',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet erat enim. Praesent vitae odio lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut sodales sapien. Duis vel sapien scelerisque, tempor ipsum eget, volutpat augue.'
        
    }
   
];


function DivCovid19() {

    function getItems({ p }) {
      
        return  p.details;
    }

    function itemsDetails ({ p }) {
        var getItemsDetails = getItems({ p })
            return getItemsDetails;     
        
    }
    
    return (
        <div className="row">
            {
                covid19.map(p => (
                <Card key={p.id} title={p.title} img={p.image} details={itemsDetails({ p })}/>
                ))
            }
        </div>
    )
}
export default DivCovid19;