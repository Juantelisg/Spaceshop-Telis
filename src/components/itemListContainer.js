import React, { useEffect, useState } from 'react';
import DivCamisas from './indumentaria.js';
import DivAccesorios from './accesorios.js';
import DivTelescopios from './telescopios.js';
import DivCovid19 from './covid.js';

import { IoShirt } from "react-icons/io5";
import { RiCupFill, RiVirusFill } from "react-icons/ri";
import { GoTelescope } from "react-icons/go";
import { MdLocalOffer } from "react-icons/md";
import { BiHeadphone } from "react-icons/bi";


function ListContainer() {
  const [showCamisas, setShowCamisas] = useState(true)
  const [showAccesorios, setShowAccesorios] = useState(false)
  const [showTelescopios, setShowTelescopios] = useState(false)
  const [showCovid19, setShowCovid19] = useState(false)
  
  function divCamisas() {
    setShowCamisas(true)
    setShowAccesorios(false)
    setShowTelescopios(false)
    setShowCovid19(false)
  }
  
  function divAccesorios() {
    setShowAccesorios(true)
    setShowCamisas(false)
    setShowTelescopios(false)
    setShowCovid19(false)
  }

  function divTelescopios() {
    setShowTelescopios(true)
    setShowAccesorios(false)
    setShowCamisas(false)
    setShowCovid19(false)
  }

  function divCovid19() {
    setShowCamisas(false)
    setShowAccesorios(false)  
    setShowTelescopios(false)
    setShowCovid19(true)
  }

  const sectionIcons = [
    {
        id: 1,
        icon: <IoShirt size={40}/>,
        title: 'Camisas',
        funct: divCamisas 
    },
    {
        id: 2,
        icon: <BiHeadphone size={40}/>,
        title: 'Accesorios',
        funct: divAccesorios
    },
    {   
        id: 3,
        icon: <GoTelescope size={40}/>,
        title: 'Telescopios',
        funct: divTelescopios
    },
    {   
        id: 4,
        icon: <MdLocalOffer size={40}/>,
        title: 'Telescopios'
    },
    {   
        id: 5,
        icon: <RiVirusFill size={40}/>,
        title: 'Covid-19',
        funct: divCovid19
    }
]
 
return (
      <div>
        <div className="row justify-content-around">
            {
              sectionIcons.map(p => (
                <p key={p.id} onClick={p.funct}>{p.icon}</p>
                
              ))
            }         
        </div>
        <div className="row">
            {showCamisas ?  
              <div>
                <div className="alert alert-primary" role="alert">Indumentaria</div>
                <DivCamisas/> 
              </div>
             
              : " "
            }
            
            {showAccesorios ?  
            <div>
              <div className="alert alert-primary" role="alert">Accesorios</div>
              <DivAccesorios/> 
            </div>
              : ""
            }
            
            {showTelescopios ?  
            <div>
              <div className="alert alert-primary" role="alert">Telescopios</div>
              <DivTelescopios/> 
            </div>
              : ""
            }

            {showCovid19 ?  
              <div>
                <div className="alert alert-primary" role="alert">Covid-19</div>
                <DivCovid19 /> 
              </div>
              : ""
            }
        </div>

        
      </div>      
    )
}

export default ListContainer;



               
                
                
               
               
           