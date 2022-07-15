/** @format */

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { BsSearch } from "react-icons/bs";
import "./CategoryFilter.css";

function CategoryFilter({ handleData }) {
  const [width, setWidth] = useState(window.innerWidth);

  const detectSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [width]);

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
    <div className='container'>
      <h6 className='category-title'>Telusuri Kategori</h6>

      {width <= 800 ? (
        <Slider {...settings}>
          <button
            className='btn btn-category-filter-slider d-flex align-items-center'
            onClick={() => handleData("all")}>
            Semua
          </button>
          <button
            className='btn btn-category-filter-slider d-flex align-items-center'
            onClick={() => handleData(1)}>
            Sneaker
          </button>
          <button
            className='btn btn-category-filter-slider d-flex align-items-center'
            onClick={() => handleData(2)}>
            Boots
          </button>
          <button
            className='btn btn-category-filter-slider d-flex align-items-center'
            onClick={() => handleData(3)}>
            Flip-Flops
          </button>
          <button
            className='btn btn-category-filter-slider d-flex align-items-center'
            onClick={() => handleData(4)}>
            Flat-Shoes
          </button>
          <button
            className='btn btn-category-filter-slider d-flex align-items-center'
            onClick={() => handleData(5)}>
            High-Heel
          </button>
        </Slider>
      ) : (
        <div className='category-filter d-flex'>
          <button
            className='btn btn-category-filter d-flex align-items-center'
            onClick={() => handleData("all")}>
            Semua
          </button>
          <button
            className='btn btn-category-filter d-flex align-items-center'
            onClick={() => handleData(1)}>
            Sneaker
          </button>
          <button
            className='btn btn-category-filter d-flex align-items-center'
            onClick={() => handleData(2)}>
            Boots
          </button>
          <button
            className='btn btn-category-filter d-flex align-items-center'
            onClick={() => handleData(3)}>
            Flip-Flops
          </button>
          <button
            className='btn btn-category-filter d-flex align-items-center'
            onClick={() => handleData(4)}>
            Flat-Shoes
          </button>
          <button
            className='btn btn-category-filter d-flex align-items-center'
            onClick={() => handleData(5)}>
            High-Heel
          </button>
        </div>
      )}
    </div>
  );
}

export default CategoryFilter;
