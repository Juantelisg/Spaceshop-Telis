import React from 'react';

function Card(props) {
    return (
        <div>
            <div class="col mb-5">
                <div class="card h-100">
                    <img class="card-img-top" src={props.img} style={{width: '100%', height: '320px'}} />
                    <div class="card-body">
                        <h4 class="card-title">{props.title}</h4>
                        <p class="card-text"></p>
                    </div>
                <div class="card-footer"><a class="btn btn-primary" href="#!">Ir a productos</a></div>
                </div>
            </div>
        </div>
    )
};

export default Card;