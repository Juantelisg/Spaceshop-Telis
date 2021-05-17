import React, { useEffect, useState } from 'react';
import Card from './card.js';
import products from './products.js';


const getProducts = new Promise((res, rej) => {
    setTimeout(() => {
      res(products);
    }, 3000);
  });

function ListContainer() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      console.log('component mounted');
  
      getProducts.then(res => {
        console.log(res);
        setProducts(res);
      });
    }, []);
    
    return (
      
        <div className="row justify-content-around">
            {
                products.map(p => (
                    <Card key={p.id} title={p.title} img={p.image} url={p.url} />
                ))
            }
        </div>        
    )
}

export default ListContainer;


               
                
                
               
               
           