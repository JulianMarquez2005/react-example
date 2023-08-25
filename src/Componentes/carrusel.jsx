import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import REF_ALPHA from './img/REF_ALPHA.jpg';
import REF_POLUX_SENCILLO from './img/REF_POLUX_SENCILLO.jpg';
import REF_ITALIA_MIXTO from './img/REF_ITALIA_MIXTO.jpg';

function Carrusel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className='contenedor'>
      <Slider {...settings}>
        <div className="carousel-item">
          <div>
            <img src={REF_ALPHA} alt={"REF_ALPHA"} className='imagenuno'/>
          </div>
        </div>
        <div className="carousel-item">
          <div>
            <img src={REF_POLUX_SENCILLO} alt={"REF_POLUX_SENCILLO"} className='imagendos'/>
          </div>
        </div>
        <div className="carousel-item">
          <div>
            <img src={REF_ITALIA_MIXTO} alt={"REF_ITALIA_MIXTO"} className='imagentres'/>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Carrusel;