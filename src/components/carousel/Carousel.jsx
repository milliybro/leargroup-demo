import React, { Component } from 'react'
import Slider from "react-slick";
import Home from '../home/Home';

import './Carousel.scss'

export default class SimpleSlider extends Component {
   render() {
     const settings = {
       dots: true,
       infinite: true,
       speed: 2000,
       slidesToShow: 1,
       slidesToScroll: 1,
       autoplay: true,
       autoplaySpeed: 2000,
     };
     return (
       <div>
         <Slider {...settings}>
            <Home />
            <Home />
            <Home />
            <Home />
         </Slider>
       </div>
     );
   }
 }