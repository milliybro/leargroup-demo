import React, { Component } from "react";
import Slider from "react-slick";
import serti1 from "../../assets/images/sertificate1.png";
import serti2 from "../../assets/images/sertificate2.png";
import serti3 from "../../assets/images/setificate3.png";
import serti4 from "../../assets/images/certificate4.png";
import serti5 from "../../assets/images/sertificate5.png";

import "./Certificate.scss";

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      //  slidesToScroll: 1
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 630,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <img src={serti1} alt="" />
          <img src={serti2} alt="" />
          <img src={serti3} alt="" />
          <img src={serti4} alt="" />
          <img src={serti5} alt="" />
          <img src={serti3} alt="" />
        </Slider>
      </div>
    );
  }
}
