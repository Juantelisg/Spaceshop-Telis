import React, {useState} from 'react';
import AddButton from './buttonAdd.js';
import DeleteItem from './buttonDelete.js';

function Botoncito() {
    return(
        <button type="button" class="btn btn-primary">Primary</button>
    )
}


function Card(props) {
    const [contador, setContador] = useState(0)
    
    const add  = () => {
      setContador(contador + 1)
        if (contador > 0){
           
        }
    }
    
    const deleted = () => {
        if (contador > 0) {
          setContador(contador - 1)
          console.log(contador)
        }  
    } 

    return (
            <div class="col-sm">
                <div class="card h-100">
                    <img class="card-img-top" src={props.img} style={{width: '100%', height: '320px'}} />
                    <div class="card-body">
                        <h4 class="card-title">{props.title}</h4>
                        <p class="card-text"></p>
                    </div>
                    <div className="row justify-content-around">
                        <DeleteItem function={deleted}/>    
                        <div>{contador}</div>                       
                        <AddButton function={add}/>
                    </div>                  
                </div>
            </div>              
    )
};

export default Card;
