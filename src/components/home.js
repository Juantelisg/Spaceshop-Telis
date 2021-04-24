import React from 'react';
import './styles/home.css';

import ListContainer from './itemListContainer.js'


function Welcome(props) {
    return(
        <div className="home-h4">
            <h4>{props.greetings}</h4>
           
        </div>
    )
}

function Home() {
    return(
        <div className="home" style={{padding: '2rem 10rem'}}>
            <div>
                <Welcome/>
            </div>
           
           <div>
                <ListContainer/>
           </div>
           
        </div>
    );
}


export default Home;