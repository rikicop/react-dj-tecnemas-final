import React from 'react';
import './Carusel.css';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import Photo1 from '../../images/user-1.png'
import Photo2 from '../../images/user-2.png'
import Photo3 from '../../images/user-3.png'
import Photo4 from '../../images/user-4.png'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const data = [
  {
    id:1,
    username: 'Fernando Otálora',
    titulo: 'Doctor en Fisiología Sensorial',
    testimonial: 'Investigo el comportamiento sensorial de los animales desde un enfoque fisiológico y biosemiótico.',
    img:Photo1
  },
  {
    id:2,
    username: 'Elis Aldana',
    titulo: 'Doctor en Ciencias',
    testimonial: 'Profesor Titular del Departamento de Biología de la Facultad de Ciencias de la Universidad de Los Andes.',
    img:Photo2
  },
  {
    id:3,
    username: 'Ricardo Otálora',
    titulo: 'Ing. en Informática y músico',
    testimonial: 'Desarrollo de aplicaiones web en Django, Html, Css  y  músico pianista.',
    img:Photo3
  },
  {
    id:4,
    username: 'Oscar Páez',
    titulo: 'Biólogo',
    testimonial: 'Doctorante de Etología de la Facultad de Ciencias de la Universidad de Los Andes.',
    img:Photo4
  }

]

function Carusel() {
  return (
    <div className="carusel-container" id="carusel">
     <div className="carusel-title"><h1>Equipo</h1></div> 
    <Swiper
      spaceBetween={20}
      autoplay={{"delay": 1500,"disableOnInteraction": false}}
      loop={true}
      slidesPerView={3}
      navigation
      /* pagination={{ clickable: true }} */
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        "0": {
          "slidesPerView": 1,
          "spaceBetween":5
        },
        "640": {
          "slidesPerView": 1,
          "spaceBetween":5
        },
        "768": {
          "slidesPerView": 2,
          "spaceBetween": 10
        },
        "1024": {
          "slidesPerView": 3,
          "spaceBetween": 20
        }
      }}
    >
      {data.map(user=>(
        <SwiperSlide key={user.id} className="slide">
          <div className="slide-content">
            <div className="user-image">
              <img src={user.img} alt="persona" className="user-photo" />
            </div>
            <div className="user-name">
              <h5>{user.username}</h5>
            </div>
            <p className="user-testimonial">
              " <i>{user.testimonial}</i> "
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
}

export default Carusel;
