import React from 'react';
import Card from './card.js';

const accesorios = [
    {   
        id: 1,
        title: 'Accesorios',
        image: 'https://cdn-images.threadless.com/threadless-media/artist_shops/shops/yeoys/products/503644/shirt-1523390067-22005f01f3d6d53f26809694812d0e46.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJpZl8iLCBbeyJ0IjogImV4cHIiLCAidiI6IFsiaGFzX2FscGhhIiwgbnVsbCwgbnVsbF19LCB7InQiOiAiY29tcCIsICJ2IjogWyJ0aHJlYWRsZXNzLW1lZGlhL2FydGlzdF9zaG9wcy9zaG9wcy95ZW95cy9wcm9kdWN0cy81MDM2NDQvc2hpcnQtMTUyMzM5MDA2Ny0yMjAwNWYwMWYzZDZkNTNmMjY4MDk2OTQ4MTJkMGU0Ni5wbmciLCBbWyJ0cmltIiwgW3RydWUsIGZhbHNlXSwge31dLCBbInJlc2l6ZSIsIFs2MTcuMzEwMDAwMDAwMDAwMSwgODM5LjY5OTk5OTk5OTk5OTldLCB7Im1heF9zY2FsZSI6IDIuMH1dLCBbInBhZCIsIFs1NTkuOCwgMjM4LjI2LCA0NjYuNSwgMjI3LjQyOTk5OTk5OTk5OTk4XSwgeyJiYWNrZ3JvdW5kIjogIjAwMDAwMCJ9XSwgWyJjYW52YXNfY2VudGVyZWQiLCBbMTA4My4wLCAxODY2LjBdLCB7ImJhY2tncm91bmQiOiAiMDAwMDAwIn1dXV19LCB7InQiOiAiY29tcCIsICJ2IjogWyJ0aHJlYWRsZXNzLW1lZGlhL2FydGlzdF9zaG9wcy9zaG9wcy95ZW95cy9wcm9kdWN0cy81MDM2NDQvc2hpcnQtMTUyMzM5MDA2Ny0yMjAwNWYwMWYzZDZkNTNmMjY4MDk2OTQ4MTJkMGU0Ni5wbmciLCBbWyJyZXNpemUiLCBbMTA4My4wLCAxODY2LjBdLCB7Im1heF9zY2FsZSI6IDIuMCwgInN0eWxlIjogIkNST1AifV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEwODMuMCwgMTg2Ni4wXSwgeyJiYWNrZ3JvdW5kIjogImZmZmZmZiJ9XV1dfV0sIHt9XSwgWyJlbmNvZGUiLCBbIi5wbmciXSwgeyJkcGkiOiAzMDB9XSwgWyJyZXNpemUiLCBbMTA3N10sIHt9XSwgWyJvdmVybGF5IiwgWyJ0aHJlYWRsZXNzLW1lZGlhL2FydGlzdF9zaG9wcy9vdmVybGF5cy8zOGE2NjQwN2RkNDdlNjAxMGY4ODRmMWJiMzcxZDNiMC9mcm9udC0xNjA2OTUzMTI0LTAxNWI3MjViZjIxOWNkMjdiN2VjOTUxMjg4ZDc5ZTg0LnBuZyJdLCB7InkiOiA1MCwgIngiOiA0NjEsICJiYWNrZ3JvdW5kIjogIjAwMDAwMCJ9XSwgWyJyZXNpemUiLCBbODAwXSwge31dLCBbImNhbnZhc19jZW50ZXJlZCIsIFs4MDAsIDgwMCwgIiNmZmZmZmYiXSwge31dLCBbImVuY29kZSIsIFsianBnIiwgODVdLCB7fV1dfQ==',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet erat enim. Praesent vitae odio lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut sodales sapien. Duis vel sapien scelerisque, tempor ipsum eget, volutpat augue.'

    },
    { 
        id: 2, 
        title: 'Accesorios', 
        image: 'https://i.pinimg.com/originals/0c/dc/e2/0cdce2996a249dbc542c250ba0a6eb70.jpg',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet erat enim. Praesent vitae odio lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut sodales sapien. Duis vel sapien scelerisque, tempor ipsum eget, volutpat augue.'
        
    },
    { 
        id: 3, 
        title: 'Accesorios', 
        image: 'https://images-na.ssl-images-amazon.com/images/I/61-qBzPVNCL._AC_SX522_.jpg',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet erat enim. Praesent vitae odio lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut sodales sapien. Duis vel sapien scelerisque, tempor ipsum eget, volutpat augue.'
        
    }
   
];


function DivAccesorios() {

    function itemsDetails({ p }) {
        return p.details;
    }

    return (
        <div className="row">
            {
                accesorios.map(p => (
                <Card key={p.id} title={p.title} img={p.image} details={itemsDetails({ p })}/>
                ))
            }
        </div>
    )
}
export default DivAccesorios;