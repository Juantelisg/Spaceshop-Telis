import React from 'react';
import './styles/home.css';


function Welcome(props) {
    return(
        <div className="home">
            <h1>{props.greetings}</h1>
        </div>
    )
}



function Home() {
    return(
        <Welcome greetings="Bienvenido"/>
        
    );
}


export default Home;