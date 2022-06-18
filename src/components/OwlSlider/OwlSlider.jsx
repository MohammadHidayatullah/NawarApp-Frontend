/** @format */

import React from "react";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import banner1 from "../../assets/img/banner1.png";
import banner2 from "../../assets/img/banner2.png";
import banner3 from "../../assets/img/banner3.png";
import "./OwlSlider.css";

function OwlSlider() {
  const item = {
    items: [
      // <img src={banner} style={{ wi: "auto" }} />,
      // <img src={banner} style={{ wi: "auto" }} />,
      <div className='content'>
        <img src={banner1} />
      </div>,
      <div className='content'>
        <img src={banner2} />
      </div>,
      <div className='content'>
        <img src={banner3} />
      </div>,
    ],
  };
  const options = {
    center: true,
    dots: false,
    items: 2,
    loop: true,
    responsiveClass: true,
    margin: 16,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
        loop: true,
      },
    },
  };
  return (
    <div className='App mt-4'>
      <OwlCarousel options={options}>{item.items}</OwlCarousel>
    </div>
  );
}

export default OwlSlider;
