import React, { Component } from 'react';
import './styles/footer.css';

import { FaInstagram } from "react-icons/fa";
import {FaGooglePlay} from "react-icons/fa"
import {FaAppStore} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaFacebookSquare} from "react-icons/fa"

function Icons() {
    return(
        <div className="div-Icons" >

            <div className="icon-footer">
                <FaGooglePlay className="iconGooglePlay"/>    
            </div>

            <div className="icon-footer">
                <FaAppStore className="iconAppStore"/>
            </div>

            <div className="icon-footer">
                <FaInstagram className="iconInstagram"/>            
            </div>
            
            <div className="icon-footer">
                <FaFacebookSquare className="iconFacebook"/>
            </div>
            <div className="icon-footer">
                <FaTwitter className="iconTwitter"/>
            </div>

        </div>
    )
}


function Footer() {
    return (
        <div className="footer">
            <Icons/>
        </div>
    );
    
}


export default Footer;