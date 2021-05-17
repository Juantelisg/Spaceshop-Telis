import React from 'react';
import './styles/home.css';

import ListContainer from './itemListContainer.js'
import Header from './header.js';
import ImgInfo from './img-info.js';


function Home() {
    return(
        <div className="home">
            <div>
                <Header/>
            </div>
           
           <div className="container">
                <ListContainer/>       
                <ImgInfo/>                       
           </div>
           
        </div>
    );
}


export default Home;