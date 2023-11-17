"use client";
import React from "react";
import './Swiperpro.css'
import HomePlansCard from '../../../component/planscard/HomePlansCard'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";
import { delay } from "framer-motion";

const SwiperPlan = () => { 
  return (
    <div >
      
      <div >
        <Swiper 
        // install Swiper modules
        breakpoints={{
          0: {
            // width: 400,
            slidesPerView: 1,
            centeredSlides: true
          },
          400: {
            // width: 400,
            slidesPerView: 1,
          },
          639: {
            // width: 639,
            slidesPerView: 2,
          },
          865: {
            // width: 865,
            slidesPerView: 3,
          },
          1000: {
            // width: 1000,
            slidesPerView: 3,
          },
          1500: {
            // width: 1500,
            slidesPerView: 4,
          },
          1700: {
            // width: 1700,
            slidesPerView: 3,
          },
        }}
        scrollbar={{ draggable: true }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={150}
          style={{ overflow: "hidden"}}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={3}
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
          <SwiperSlide style={{marginLeft:'1.5rem'}}>
          <HomePlansCard 
        title="Weekly Diet Plan"
        content={`We specialize in crafting personalized weekly diet plans, tailored to your unique needs and goals. 
        Let us guide you on your journey to a healthier and more balanced lifestyle.`}
        Images="./plan1_1.jpeg"
        link="WeightLossPrograms"
      />
          </SwiperSlide>
          <SwiperSlide>
          <HomePlansCard 
        title="Workout Trainer"
        content={` Your gateway to a healthier you. Achieve your fitness goals with our expert guidance.`}
        Images="./plan4.webp"
        link="WeightLossPrograms"
      />
          </SwiperSlide>
          <SwiperSlide>
          <HomePlansCard 
        title="AI Therapy"
        content={`Revolutionizing mental health support with innovative and accessible solutions. Explore the future of mental well-being.`}
        Images="./plan6_1.jpeg"
        // plan6.jpg
        link="WeightLossPrograms"
      />
          </SwiperSlide>
          
          
          <SwiperSlide>
          <HomePlansCard 
        title="AI Recipe Maker"
        content={`Redefining cooking with smart and personalized recipe suggestions. Elevate your culinary experience with artificial intelligence.`}
        Images="./plan3.WEBP"
        // plan3.png
        link="WeightLossPrograms"
      />
          </SwiperSlide>

          <SwiperSlide>
          <HomePlansCard 
        title="Ebooks/podcasts"
        content={`Your digital gateway to knowledge and entertainment. Dive into a world of limitless learning and captivating content.`}
        Images="./plan5_1.jpeg"
        link="WeightLossPrograms"
      />
          </SwiperSlide>

          <SwiperSlide>
          <HomePlansCard 
        title="Grocery Delivery"
        content={`The convenience you deserve, right at your doorstep. Shop smart and save time with our hassle-free grocery delivery service.`}
        Images="./plan2.webp"
        link="WeightLossPrograms"
      />
          </SwiperSlide>
                  

          <SwiperSlide>
          <HomePlansCard 
        title="Workout templates!"
        content={`Your daily companion for a healthier you. Monitor, motivate, and achieve your fitness goals with precision.`}
        Images="./plan7.webp"
        link="WeightLossPrograms"
      />
          </SwiperSlide>
        
          
          {/* ***********Slider dots******************** */}

          <div className="slider-controler" style={{ paddingTop: "6rem" }}>
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>

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

export default SwiperPlan;

