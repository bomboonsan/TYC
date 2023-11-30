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
    <Swiper pagination={true} modules={[Pagination]} loop={true} className="mySwiper">
      <SwiperSlide>
          <div className="products-banner" style={
            {
              backgroundImage: 'url("/assets/img/home-banner-1.png")',
            }
          }>
              <div className="container relative">
                <div className="home-banner-content">
                  <h2 className='title'>
                    Seal in the quality with T.Y.C. Seal <br/>
                    “มั่นใจ ไม่รั่วซึม ต้อง ที.วาย.ซี. ซีล”
                  </h2>
                  <div className="home-banner-row">
                    <div className="icon">
                      <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.9393 31.0607C11.5251 31.6464 12.4749 31.6464 13.0607 31.0607L22.6066 21.5147C23.1924 20.9289 23.1924 19.9792 22.6066 19.3934C22.0208 18.8076 21.0711 18.8076 20.4853 19.3934L12 27.8787L3.51472 19.3934C2.92893 18.8076 1.97918 18.8076 1.3934 19.3934C0.807611 19.9792 0.807611 20.9289 1.3934 21.5147L10.9393 31.0607ZM10.5 -6.55671e-08L10.5 30L13.5 30L13.5 6.55671e-08L10.5 -6.55671e-08Z" fill="white"/>
                      </svg>
                    </div>
                    <p className="text-lg">
                      ผู้ผลิตและจำหน่ายยางขึ้นรูปตามแบบและยางโอริงขนาดต่างๆ
                    </p>
                  </div>
                  <a href='#' className='btn-primary'>
                    ติดต่อเรา
                  </a>
                </div>
              </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className="products-banner" style={
            {
              backgroundImage: 'url("/assets/img/home-banner-1.png")',
            }
          }>
              <div className="container relative">
                <div className="home-banner-content">
                  <h2 className='title'>
                    Seal in the quality with T.Y.C. Seal <br/>
                    “มั่นใจ ไม่รั่วซึม ต้อง ที.วาย.ซี. ซีล”
                  </h2>
                  <div className="home-banner-row">
                    <div className="icon">
                      <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.9393 31.0607C11.5251 31.6464 12.4749 31.6464 13.0607 31.0607L22.6066 21.5147C23.1924 20.9289 23.1924 19.9792 22.6066 19.3934C22.0208 18.8076 21.0711 18.8076 20.4853 19.3934L12 27.8787L3.51472 19.3934C2.92893 18.8076 1.97918 18.8076 1.3934 19.3934C0.807611 19.9792 0.807611 20.9289 1.3934 21.5147L10.9393 31.0607ZM10.5 -6.55671e-08L10.5 30L13.5 30L13.5 6.55671e-08L10.5 -6.55671e-08Z" fill="white"/>
                      </svg>
                    </div>
                    <p className="text-lg">
                      ผู้ผลิตและจำหน่ายยางขึ้นรูปตามแบบและยางโอริงขนาดต่างๆ
                    </p>
                  </div>
                  <a href='#' className='btn-primary'>
                    ติดต่อเรา
                  </a>
                </div>
              </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className="products-banner" style={
            {
              backgroundImage: 'url("/assets/img/home-banner-1.png")',
            }
          }>
              <div className="container relative">
                <div className="home-banner-content">
                  <h2 className='title'>
                    Seal in the quality with T.Y.C. Seal <br/>
                    “มั่นใจ ไม่รั่วซึม ต้อง ที.วาย.ซี. ซีล”
                  </h2>
                  <div className="home-banner-row">
                    <div className="icon">
                      <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.9393 31.0607C11.5251 31.6464 12.4749 31.6464 13.0607 31.0607L22.6066 21.5147C23.1924 20.9289 23.1924 19.9792 22.6066 19.3934C22.0208 18.8076 21.0711 18.8076 20.4853 19.3934L12 27.8787L3.51472 19.3934C2.92893 18.8076 1.97918 18.8076 1.3934 19.3934C0.807611 19.9792 0.807611 20.9289 1.3934 21.5147L10.9393 31.0607ZM10.5 -6.55671e-08L10.5 30L13.5 30L13.5 6.55671e-08L10.5 -6.55671e-08Z" fill="white"/>
                      </svg>
                    </div>
                    <p className="text-lg">
                      ผู้ผลิตและจำหน่ายยางขึ้นรูปตามแบบและยางโอริงขนาดต่างๆ
                    </p>
                  </div>
                  <a href='#' className='btn-primary'>
                    ติดต่อเรา
                  </a>
                </div>
              </div>
          </div>
      </SwiperSlide>
    </Swiper>
  );
};