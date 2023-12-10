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
              backgroundImage: 'url("/assets/img/01_preparing.png")',
            }
          }>
            <div className="content">
              <p>
                1. Preparing
              </p>
            </div>            
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className="products-card" style={
            {
              backgroundImage: 'url("/assets/img/02_productio.png")',
            }
          }>
            <div className="content">
              <p>
                2. Productio
              </p>
            </div>    
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className="products-card" style={
            {
              backgroundImage: 'url("/assets/img/03_in_process_inspection.png")',
            }
          }>
            <div className="content">
              <p>
                3. In Process inspection
              </p>
            </div>  
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className="products-card" style={
            {
              backgroundImage: 'url("/assets/img/04_sorting.png")',
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
              backgroundImage: 'url("/assets/img/05_final_inspection.png")',
            }
          }>
            <div className="content">
              <p>
                5. Final inspection
              </p>
            </div>  
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className="products-card" style={
            {
              backgroundImage: 'url("/assets/img/06_packaging.png")',
            }
          }>
            <div className="content">
              <p>
                6. Packaging
              </p>
            </div>  
          </div>
      </SwiperSlide>
          
    </Swiper>
  );
};