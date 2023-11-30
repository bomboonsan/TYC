import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default () => {
  return (
    <Swiper modules={[Pagination]} loop={true} slidesPerView={2.4} spaceBetween={30} className="mySwiper">
      <SwiperSlide>
          <div className="products-card" style={
            {
              backgroundImage: 'url("/assets/img/card1.png")',
            }
          }>
            <div className="content">
              <p>
                3. In Process, Inspection
              </p>
            </div>            
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className="products-card" style={
            {
              backgroundImage: 'url("/assets/img/card2.png")',
            }
          }>
            <div className="content">
              <p>
                4. Sorting
              </p>
            </div>    
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className="products-card" style={
            {
              backgroundImage: 'url("/assets/img/card3.png")',
            }
          }>
            <div className="content">
              <p>
                5. Final Inspection
              </p>
            </div>  
          </div>
      </SwiperSlide>
          
    </Swiper>
  );
};