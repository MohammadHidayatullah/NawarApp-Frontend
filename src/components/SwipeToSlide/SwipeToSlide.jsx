/** @format */
import React from "react";
import Slider from "react-slick";
import { FiBox, FiHeart, FiDollarSign } from "react-icons/fi";
import "./SwipeToSlide.css";

function SwipeToSlide({ handleData }) {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  return (
    <div className='my-3'>
      <Slider {...settings}>
        <div
          className='btn btn-category d-flex align-items-center active'
          onClick={() => handleData(1)}>
          <FiBox className='me-2' size={20} />
          Produk
        </div>
        <div
          className='btn btn-category d-flex align-items-center'
          onClick={() => handleData(2)}>
          <FiHeart className='me-2' size={20} />
          Diminati
        </div>
        <div
          className='btn btn-category d-flex align-items-center'
          onClick={() => handleData(3)}>
          <FiDollarSign className='me-2' size={20} />
          Terjual
        </div>
      </Slider>
    </div>
  );
}

export default SwipeToSlide;
