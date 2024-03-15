import React from 'react'
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";
//import Slider from "react-slick";
//import imagenesCarrusel from './imagenesCarrusel';
import imagen from './imagen1.jpg'
import imagen2 from './imagen2.jpg'
import imagen3 from './imagen3.jpg'
import imagen4 from './imagen4.jpeg'
import imagen5 from './imagen5.jpeg'
import imagen6 from './imagen6.jpeg'
import './carrusel.css'




function Carrusel() {
    // let settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3, //Muestra la cantidad de imágenes de una vez
    //     slidesToScroll: 1
    // };
    return (


        /* <Slider {...settings}>
            {imagenesCarrusel.map(items => {
                return (
                    <div key={items.id}  >
                        <img src={items.image} alt='Imagen' />
                    </div>
                )
            })}
        </Slider> */

        /*  return (
        <Carousel interval={500}>
            <Carousel.Item>
                {imagenesCarrusel.map(items => {
                    return (<img classNameNameName='imgCarrusel' src={items.image} alt='Imagen'/>)
                })}
            </Carousel.Item>
        </Carousel>
    ) */

        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" >
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                
            </div>
            <div className="carousel-inner bg-secondary">
                <div className="carousel-item active" data-bs-interval="1000">
                    <img src={imagen} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={imagen2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" >
                    <img src={imagen3} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" >
                    <img src={imagen4} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" >
                    <img src={imagen5} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" >
                    <img src={imagen6} className="d-block w-100" alt="..." />
                </div>
               
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>





    )


}

export default Carrusel