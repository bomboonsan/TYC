import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default (props) => {
  return (
    <Swiper pagination={true} modules={[Pagination]} loop={true}  className="mySwiper">
      {props.images.map((item, index) => (
        <SwiperSlide key={index}>
          <div className='bg-dark'>
            <img className='h-full w-full aspect-square object-cover cursor-pointer' src={item} alt="" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};