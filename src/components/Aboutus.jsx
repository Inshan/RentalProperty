import React from 'react'
import AboutData from './data/AboutData'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import Link from 'next/link';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Aboutus = () => {
  return (
    <>
    <div>
      <img src="images/Banner-1.png"/>
    </div>
     <div className="flex flex-wrap">
        <div className="md:flex-1 w-50 mx-10 my-5 mt-10 mb-10 flex-wrap">
          <div className="tracking-wider pr-5 pb-5 pl-5 md:pb-20 md:pl-10 content-column col-lg-6 col-md-12 col-sm-12 order-2">
            <div className="text-justify text-xl">
            <h2><p className=" pl-5 pt-5 pb-5">We are a Creative Tech Enthusiast working since 2015.</p></h2>
              <p className="pl-5 pt-5 pb-5 mb-3 text-black-600 dark:text-black-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-black dark:first-letter:text-black first-letter:mr-3 first-letter:float-left"> 
              Welcome to Meerako Properties, where we believe that every client is unique and deserves a personalized experience when buying, selling, or renting a property. 
              </p>
              <div className="indent-5">Our team of real estate experts is passionate about providing exceptional services to our clients and making sure that their needs are met. We are a leading real estate agency that has been in the business for over a decade, providing top-notch services to our clients in the United States. </div>
              <div className="indent-5 mt-5">We are proud of our reputation for excellence and are committed to maintaining it. Our team is dedicated to staying up-to-date with the latest industry trends and technology to ensure that we continue to offer the best service possible.</div>
            </div>
            <div className="p-5 text-center text-xl author-desc">
                <h2>Manish Yadav</h2>
                <h2>(CEO/Founder)</h2>
              </div>
          </div>
        </div>
        <div className="flex-1">
        <div className="flex-1 w-30 mx-10 my-10 mt-10 mb-10">
          <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <img
                    title="Building"
                    src="images/building.png"
                    className="max-auto rounded-full"
                    alt
                  />
          </div>
        </div>     
        </div>
    </div>
  
    <div className="hidden md:block">
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
     <div className="mx-auto h-42 p-5 my-5">
      <div className="bg-white h-auto shadow-2xl mb-6 mx-1 md:mx-10 py-1 md:py-5">
      <img className="mx-auto w-28 h-28 object-cover rounded-full shadow" src={value.img} alt="avatar" />
      
        <div className="px-4 py-2 mt-2">
        <img className='w-10 h-10 ml-1 md:ml-5' src="images/quotefront.png"/><h2 className="font-bold text-center text-lg md:text-4xl text-gray-800 tracking-normal">{value.title}
          <div className='px-10 md:px-5' >
          <p className="font-normal text-gray-700 pt-5 mr-1 text-sm md:px-5 md:text-xl text-justify">{value.desc}<img src="images/quotebottom.png" className='w-10 h-10' /></p>
          <div className="text-right text-sm">-{value.name}</div>
          </div>
          </h2>
        </div>
      </div>

    </div>
    </SwiperSlide>
    ))}
    </Swiper>
    </div>
{/* ---------------------------- Swiper responsive-------------------------- */}
    <div className="md:hidden">
    <Swiper
        slidesPerView={1}
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
     <div className="mx-auto h-42 p-5 my-5">
      <div className="bg-white h-auto shadow-2xl mb-6 mx-1 md:mx-10 py-1 md:py-5">
      <img className="mx-auto w-28 h-28 object-cover rounded-full shadow" src={value.img} alt="avatar" />
      
        <div className="px-4 py-2 mt-2">
        <img className='w-10 h-10 ml-1 md:ml-5' src="images/quotefront.png"/><h2 className="font-bold text-center text-lg md:text-2xl text-gray-800 tracking-normal">{value.title}
          <div className='px-5 md:px-20' >
          <p className="font-normal text-gray-700 px-2 mr-1 text-sm md:px-5 md:text-lg text-justify">{value.desc}<img src="images/quotebottom.png" className='w-10 h-10' /></p>
          <div className="text-right text-sm">-{value.name}</div>
          </div>
        
          </h2>
        </div>
      </div>

    </div>
    </SwiperSlide>
    ))}
    </Swiper>
    </div>
    </>
  );
};

export default Aboutus;
