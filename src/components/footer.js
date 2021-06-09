import React, { Component } from 'react';
import './styles/footer.css';
import FormContact from './form-contact'

import { FaInstagram } from "react-icons/fa";
import {FaGooglePlay} from "react-icons/fa"
import {FaAppStore} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaFacebookSquare} from "react-icons/fa"

const icons = [
    {
        id: 1, 
        name: <FaGooglePlay/>
    },
    {
        id: 2, 
        name: <FaAppStore/>
    },
    {
        id: 3, 
        name: <FaInstagram/>
    },
    {
        id: 4, 
        name: <FaFacebookSquare/>
    },
    {
        id: 5, 
        name: <FaTwitter/>
    }
]

function Icons() {
    return(
        <div >
            <div>
                {
                    icons.map(i =>(
                        <a id={i.id} style={{padding: '1rem', color: 'white'}}>{i.name}</a>
                    ))
                } 
            </div>
        </div>
    )
}


function Footer() {
    return (
        <div>
            <footer className="py-5 bg-dark">
                <div className="">
                    <FormContact/>
                </div>
                <div className="container">
                    <p class="m-0 text-center text-white"></p>
                    <Icons/>                    
                </div>
            </footer>
        </div>
    );
    
}


export default Footer;