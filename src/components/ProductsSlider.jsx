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
              backgroundImage: 'url("/assets/img/product-banner-bg-1.png")',
            }
          }>
              <div className="container">
                <div className="content">
                  <h2 className='title'>
                    ผลิตภัณฑ์ของเรา
                  </h2>
                  <p>
                    เรามุ่งเน้นที่จะพัฒนาคุณภาพสินค้าและบุคลากรอย่างเนื่อง เพื่อที่จะเป็นผู้นำในอุตสาหกรรมด้านนี้ นอกเหนือจากคุณภาพนั้นเราสินค้าเรายังมีความหลากหลาย ไม่ว่าจะเป็นทั้งด้านวัตถุดิบ ที่สามารถเลือกตามความต้องการลูกค้า เช่น ความแข็ง ชนิดของยาง หรือสีต่างๆ เราก็สามารถผลิตให้ได้อย่างดีเยี่ยม
                  </p>
                </div>
              </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className="products-banner" style={
            {
              backgroundImage: 'url("/assets/img/product-banner-bg-1.png")',
            }
          }>
              <div className="container">
                <div className="content">
                  <h2 className='title'>
                    ผลิตภัณฑ์ของเรา
                  </h2>
                  <p>
                    เรามุ่งเน้นที่จะพัฒนาคุณภาพสินค้าและบุคลากรอย่างเนื่อง เพื่อที่จะเป็นผู้นำในอุตสาหกรรมด้านนี้ นอกเหนือจากคุณภาพนั้นเราสินค้าเรายังมีความหลากหลาย ไม่ว่าจะเป็นทั้งด้านวัตถุดิบ ที่สามารถเลือกตามความต้องการลูกค้า เช่น ความแข็ง ชนิดของยาง หรือสีต่างๆ เราก็สามารถผลิตให้ได้อย่างดีเยี่ยม
                  </p>
                </div>
              </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className="products-banner" style={
            {
              backgroundImage: 'url("/assets/img/product-banner-bg-1.png")',
            }
          }>
              <div className="container">
                <div className="content">
                  <h2 className='title'>
                    ผลิตภัณฑ์ของเรา
                  </h2>
                  <p>
                    เรามุ่งเน้นที่จะพัฒนาคุณภาพสินค้าและบุคลากรอย่างเนื่อง เพื่อที่จะเป็นผู้นำในอุตสาหกรรมด้านนี้ นอกเหนือจากคุณภาพนั้นเราสินค้าเรายังมีความหลากหลาย ไม่ว่าจะเป็นทั้งด้านวัตถุดิบ ที่สามารถเลือกตามความต้องการลูกค้า เช่น ความแข็ง ชนิดของยาง หรือสีต่างๆ เราก็สามารถผลิตให้ได้อย่างดีเยี่ยม
                  </p>
                </div>
              </div>
          </div>
      </SwiperSlide>
          
    </Swiper>
  );
};