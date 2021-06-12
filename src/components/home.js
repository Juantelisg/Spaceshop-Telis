import React from 'react';
import './styles/home.css';

import ListContainer from './itemListContainer.js'
import Header from './header.js';
import ImgInfo from './img-info.js';


function Home() {
    return(
        <div className="home" style={{ paddingTop: '9rem'}}>
           <Header/>
           <div className="container" style={{marginBottom: '1rem'}}>
                <div style={{marginTop: '2rem'}}>
                    <ListContainer/>
                </div>
                <div>
                    <ImgInfo/>      
                </div>                                        
            </div>
        </div>
    );
}


export default Home;