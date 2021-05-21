import React from 'react';
import { SiVisa } from "react-icons/si";
import { SiMastercard } from "react-icons/si";
import { SiAmericanexpress } from "react-icons/si";

const mthsPay = [
    {
        id: 1,
        name: <SiVisa size={70} style={{color: 'white'}}/>,
        color: 'white'
     
    },
    {
        id: 2,
        name: <SiMastercard size={70} style={{color: 'white'}}/>,
        color: 'white'
    },
    {
        id: 3,
        name: < SiAmericanexpress size={70} style={{color: 'white'}}/>,
        color: 'white'  
    }
]

function CardMPay(props) {
    return (
        <nav class="nav nav-pills nav-fill">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">{props.name}</a>
        </nav>
    )
}

function ListMthspay() {
    return (
        <div className="row justify-content-around" style={{marginRight: '0'}}>
            {
                mthsPay.map(method => (
                    <CardMPay key={method.id} name={method.name}/>
                ))
            }
        </div>        
    )

}

export default ListMthspay;