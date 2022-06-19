/** @format */

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../assets/img/banner1.png";
import banner2 from "../../assets/img/banner2.png";
import banner3 from "../../assets/img/banner3.png";
import "swiper/css";
import { Autoplay } from "swiper";
import "swiper/css/autoplay";
import "./Slider.css";

function Slider() {
  return (
    <div className='slider mt-4'>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2500 }}
        loop={true}
        spaceBetween={16}
        centeredSlides={true}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}>
        <SwiperSlide>
          <div className='swiper-slide'>
            <img src={banner1} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiper-slide'>
            <img src={banner2} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiper-slide'>
            <img src={banner3} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
