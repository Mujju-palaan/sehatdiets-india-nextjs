"use client"
import React from 'react'
import './Testimonials.module.scss'
import ReviewCard from  '../../../../component/ReviewCard/ReviewCard'

// import './Swiperpro.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";
import { delay } from "framer-motion";

const SwiperTestimonial = () => { 
  return (
    <div >
      <ReviewCard></ReviewCard>
      
      <div >
        <Swiper 
        // install Swiper modules
        scrollbar={{ draggable: true }}
          // autoplay={{
          //   delay: 1000,
          //   disableOnInteraction: false,
          //   pauseOnMouseEnter: true,
          // }}
          spaceBetween={50}
          style={{ overflow: "hidden"}}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"3"}
          watchOverflow={"none"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 30,
            modifier: 1,
            watchOverflow: "visible",
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="swiper_container"
        >
          <SwiperSlide>
          <ReviewCard></ReviewCard>
          </SwiperSlide>

          {/* <SwiperSlide>
          <ReviewCard></ReviewCard>
          </SwiperSlide>

          <SwiperSlide>
          <ReviewCard></ReviewCard>
          </SwiperSlide>

          <SwiperSlide>
          <ReviewCard></ReviewCard>
          </SwiperSlide>

          <SwiperSlide>
          <ReviewCard></ReviewCard>
          </SwiperSlide> */}

          {/* <SwiperSlide>
          <ReviewCard></ReviewCard>
          </SwiperSlide>
                  

          <SwiperSlide>
          <ReviewCard></ReviewCard>
          </SwiperSlide> */}
        
          
          {/* ***********Slider dots******************** */}

          {/* <div className="slider-controler" style={{ paddingTop: "8rem" }}>
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div> */}

          {/* ***********Slider arrows******************** */}
        {/* <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div> */}

          
        </Swiper>
      </div>
    </div>
  );
};

// const Testimonials = () => {
//   return (
//     <>
//         <div style={{display:'flex',flexWrap:'wrap' ,gap:'2rem', textAlign:'center', justifyContent:'center'}}>
//         <ReviewCard></ReviewCard>
//         <ReviewCard></ReviewCard>
//         <ReviewCard></ReviewCard>
//         <ReviewCard></ReviewCard>

//         </div>
//     </>
    
//   )
// }

export default SwiperTestimonial