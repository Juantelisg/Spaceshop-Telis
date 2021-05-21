import React from "react";

import { IoShirt } from "react-icons/io5";
import { RiCupFill, RiVirusFill } from "react-icons/ri";
import { GrDeliver } from "react-icons/gr";
import { MdLocalOffer } from "react-icons/md";

const sectionIcons = [
    {
        id: 1,
        icon: <IoShirt size={40}/>,
        title: 'Camisas',
    },
    {
        id: 2,
        icon: <RiCupFill size={40}/>,
        title: 'Accesorios',
        
    },
    {   
        id: 3,
        icon: <MdLocalOffer size={40}/>,
        title: 'Ofertas'
    },
    {   
        id: 4,
        icon: <GrDeliver size={40}/>,
        title: 'Envios'
    },
    {   
        id: 5,
        icon: <RiVirusFill size={40}/>,
        title: 'Covid-19'
    }
]

function DivProducts() {
    return (
        <div className="row justify-content-around">
           {
                sectionIcons.map(s => (
                    <div>
                        <a key={s.id} style={{padding: '10px', border: '1px solid', borderRadius: '35px'}} onClick={s.funct}>{s.icon}</a>
                        <p key={s.id}>{s.title}</p>
                    </div>
                ))
            }          
        </div>
    )
}

export default DivProducts;