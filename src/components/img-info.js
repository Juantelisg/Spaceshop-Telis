import React from 'react';

const infoImg = [{id: 1, img: 'https://maskmarket.com/wp-content/uploads/2020/07/3D_NASA1.jpg'}, {id: 2, img:'https://www.redwolf.in/image/catalog/mobile-covers/apple-iphone-x/apple-iphone-x-nasa-rocket-science-mobile-phone-cover-india.jpg'}]

function CardImgInfo1(props) {
    return (
        <div class="row align-items-center my-5">
                <div class="col-lg-7">
                    <img class="img-fluid rounded mb-4 mb-lg-0" src={props.img} />
                </div>
                <div class="col-lg-5">
                    <h1 class="font-weight-light">¿Fan del universo?</h1>
                    <p>Nuestra linea de productos te va a encantar!</p>
                    <a class="btn btn-primary" href="#!">Ir a productos</a>
                </div>
        </div>
    )
}

function CardImgInfo2(props) {
    return (
        <div class="row align-items-center my-5">
               <div class="col-lg-5">
                    <h1 class="font-weight-light">¿Fan del universo?</h1>
                    <p>Nuestra linea de productos te va a encantar!</p>
                    <a class="btn btn-primary" href="#!">Ir a productos</a>
                </div>
                <div class="col-lg-7">
                    <img class="img-fluid rounded mb-4 mb-lg-0" src={props.img} />
                </div>
        </div>
    )
}

function ImgInfo () {
    return(
        <div>
          <CardImgInfo1 img={infoImg[0].img}/>
          <CardImgInfo2 img={infoImg[1].img}/>
        </div>
    )
}


export default ImgInfo;