import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination , Navigation } from 'swiper/modules';

export default (props) => {
  return (
    <Swiper pagination={true} navigation={true} modules={[Pagination , Navigation]} loop={true}  className="mySwiper">
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