import React, { Component } from 'react';
import './styles/footer.css';

import { FaInstagram } from "react-icons/fa";
import {FaGooglePlay} from "react-icons/fa"
import {FaAppStore} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaFacebookSquare} from "react-icons/fa"




function LeftIcons(props) {
    return (
        <div className="footer-left-icons">
            <div>
                <FaAppStore className="iconAppStore"/>
            </div>
            <div>
                <FaGooglePlay className="iconGooglePlay"/>    
            </div>
        </div>
    )
}

function RightIcons() {
    return(
        <div className="footer-right-icons">
            <div>
                <FaInstagram className="iconInstagram"/>            
            </div>
            
            <div>
                <FaFacebookSquare className="iconFacebook"/>
            </div>
            <div>
                <FaTwitter className="iconTwitter"/>
            </div>
        </div>
    )
}


function Footer() {
    return (
        <div className="footer">
            <div>
                <LeftIcons/>
            </div>
            
            <div >
                <RightIcons/>
            </div>
        </div>
    );
    
}


export default Footer;