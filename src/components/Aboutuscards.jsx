import React from 'react'
import AboutData from './data/AboutData'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Aboutuscards = () => {
  return (
    <>
     <Swiper
        slidesPerView={2}
        spaceBetween={30}
        centeredSlides={false}
        className="mySwiper"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay, Navigation]}
      >
       
    {AboutData.cardData.map((value, index) => (
    <SwiperSlide key={index}>
<div className="mx-auto h-42 px-4 py-8 my-20">
  <div className="bg-white h-auto shadow-2xl mb-6 mx-10  py-10  ">
  <img className="mx-auto w-28 h-28 object-cover rounded-full shadow" src={value.img} alt="avatar" />
   
    <div className="px-4 py-2 mt-2">
    <img className='w-10 h-10 ml-20 ' src="images/quotefront.png"/><h2 className="font-bold text-center text-2xl text-gray-800 tracking-normal">{value.title}
      <div className='px-20' >
      <p className="font-normal text-gray-700 px-2 mr-1 text-justify">{value.desc}<img src="images/quotebottom.png" className='w-10 h-10' /></p>
      <div className="text-right">-{value.name}</div>
      </div>
     
      </h2>
    </div>
  </div>

</div>
    </SwiperSlide>
    ))}
          </Swiper>

</>
  )
}

export default Aboutuscards
