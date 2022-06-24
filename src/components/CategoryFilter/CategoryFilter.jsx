/** @format */

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./CategoryFilter.css";
import { BsSearch } from "react-icons/bs";

function CategoryFilter() {
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
          <button className='btn btn-category-filter-slider d-flex align-items-center'>
            <BsSearch className='basearch-icon me-2' /> Semua
          </button>
          <button className='btn btn-category-filter-slider d-flex align-items-center'>
            <BsSearch className='basearch-icon me-2' /> Casual
          </button>
          <button className='btn btn-category-filter-slider d-flex align-items-center'>
            <BsSearch className='basearch-icon me-2' /> Sneakers
          </button>
          <button className='btn btn-category-filter-slider d-flex align-items-center'>
            <BsSearch className='basearch-icon me-2' /> Sport
          </button>
          <button className='btn btn-category-filter-slider d-flex align-items-center'>
            <BsSearch className='basearch-icon me-2' /> Boots
          </button>
          <button className='btn btn-category-filter-slider d-flex align-items-center'>
            <BsSearch className='basearch-icon me-2' /> Slip On
          </button>
        </Slider>
      ) : (
        <div className='category-filter d-flex'>
          {" "}
          <button className='btn btn-category-filter d-flex align-items-center'>
            <BsSearch className='basearch-icon me-2' /> Semua
          </button>
          <button className='btn btn-category-filter d-flex align-items-center'>
            <BsSearch className='basearch-icon me-2' /> Casual
          </button>
          <button className='btn btn-category-filter d-flex align-items-center'>
            <BsSearch className='basearch-icon me-2' /> Sneakers
          </button>
          <button className='btn btn-category-filter d-flex align-items-center'>
            <BsSearch className='basearch-icon me-2' /> Sport
          </button>
          <button className='btn btn-category-filter d-flex align-items-center'>
            <BsSearch className='basearch-icon me-2' /> Boots
          </button>
          <button className='btn btn-category-filter d-flex align-items-center'>
            <BsSearch className='basearch-icon me-2' /> Slip On
          </button>
        </div>
      )}
    </div>
  );
}

export default CategoryFilter;
