import React from 'react';

function Card(props) {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={props.img} className="card-img-top" style={{ height: '15rem' }}/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
};

function ListContainer() {
    return (
        <div className="sweater" style={{ display: 'flex', justifyContent: 'space-around'}}>
            <div>
                <Card title="Ropa" img="https://m.media-amazon.com/images/I/B1i3u9-Q-KS._CLa%7C2140%2C2000%7CB1hUTWJTcdS.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX342_.png"/>
            </div>
            
            <div>
                <Card title="Accesorios" img="https://todoastronautas.com/wp-content/uploads/2019/07/gorra-oficial-de-la-nasa-con-logo.jpg" />
            </div>
        </div>
    )
}

export default ListContainer;


               
                
                
               
               
           