import React from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import subimg from "../../public/images/rent.png";
import img1 from "../../public/images/blog1.png";
import img2 from "../../public/images/blog2.png";
import img3 from "../../public/images/blog3.png";
import img4 from "../../public/images/blog4.png";
import img5 from "../../public/images/blog5.png";
import img6 from "../../public/images/blog6.png";

import AboutData from "./data/AboutData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Link from "next/link";
//import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import PropertyBg from "../../public/images/property_bg.png";

const Aboutus = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className=" text-gray-800 text-center lg:text-left background-radial-gradient   ">
        <div
          className=" bg-no-repeat bg-cover min-h-min "
          style={{
            backgroundPosition: "50%",
            backgroundImage: `url(${PropertyBg.src})`,
          }}
        >
          <div
            className=" top-0 right-0 bottom-0 left-0 w-full min-h-min overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
          >
            <div>
              <div className="flex flex-wrap md:flex-nowrap justify-between  items-center h-full sm:mx-8 md:mx-2 lg:mx-10 py-10 ">
                <div className=" w-full lg:w-1/2 md:w-1/2 px-4 sm:px-8 md:px-4 lg:px-2  grid place-items-center  ">
                  <h1 className="text-center md:text-3xl lg:text-4xl text-2xl  text-white pb-10 ">
                    About Us
                  </h1>
                  <p className="text-white px-8 text-sm sm:text-sm md:text-sm lg:text-xl text-justify tracking-tighter opacity-75 pb-10 ">
                    At Meerako Property Rental, we are passionate about helping
                    people find their dream home or investment property. We
                    understand that buying or selling a property can be a
                    complex and emotional process, which is why we are here to
                    guide you every step of the way.
                  </p>
                  <p className="text-white px-8 text-sm sm:text-sm md:text-sm lg:text-xl text-justify tracking-tighter opacity-75 ">
                    Our team of experienced real estate agents are experts in
                    the local market and have a deep understanding of the buying
                    and selling process. We take the time to listen to your
                    needs and provide personalized advice and support to help
                    you achieve your goals.
                  </p>
                </div>

                <div className=" flex w-full lg:w-1/2  md:w-1/2 mx-6  items-center justify-center  py-10  h-auto ">
                  <Image className="rounded-lg" src={subimg}></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-center sm:justify-normal md:justify-normal lg:justify-normal gap-4">
          <h1 className="text-2xl  md:ml-16 sm:ml-12 lg:ml-28  py-10  opacity-50 ">
            Our Gallery
          </h1>
          <span className="text-xl font-semibold opacity-50 ">
            <BsArrowRight />
          </span>
        </div>
        <div data-aos="zoom-in" className="  px-5 py-2 lg:px-20 lg:pt-0">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/2 flex-wrap">
              <div className="w-1/2 p-1 md:p-2">
                <Image
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  data-aos="flip-right"
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={img1}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <Image
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  data-aos="flip-left"
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={img6}
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <Image
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  data-aos="flip-right"
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={img2}
                />
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <Image
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  data-aos="flip-left"
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={img3}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <Image
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  data-aos="flip-right"
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={img4}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <Image
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  data-aos="flip-left"
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={img5}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center sm:justify-normal md:justify-normal lg:justify-normal gap-4 lg:ml-10 md:ml-0 sm:ml-8 opacity-50 ">
        <h1 className="text-2xl lg:ml-20 md:ml-16 sm:ml-12  py-10   ">
          Our Expert
        </h1>
        <span className="text-xl font-semibold">
          <BsArrowRight />
        </span>
      </div>

      <div className="hidden md:flex">
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
              <div className="lg:mx-16 md:mx-10  py-5">
                <div className="bg-white  shadow-xl mb-4 mx-1 md:mx-2 py-1 md:py-2">
                  <img
                    className="mx-auto w-28 h-28 object-cover rounded-full shadow"
                    src={value.img}
                    alt="avatar"
                  />

                  <div className="px-2 py-2 mt-2">
                    <img
                      className="w-8 h-auto ml-1 md:ml-5  opacity-50 "
                      src="images/quotefront.png"
                    />
                    <h2 className="  text-center text-lg md:text-2xl lg:text-2xl text-gray-400 tracking-normal">
                      {value.title}
                      <div className="px-8 md:px-5">
                        <p className="font-normal text-gray-700 pt-5 mr-1 text-medium md:px-5 md:text-xs lg:text-sm text-justify">
                          {value.desc}
                          <img
                            src="images/quotebottom.png"
                            className="w-8 h-10 opacity-50 "
                          />
                        </p>
                        <div className="text-right text-lg">-{value.name}</div>
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
                  <img
                    className="mx-auto w-28 h-28 object-cover rounded-full shadow"
                    src={value.img}
                    alt="avatar"
                  />

                  <div className="px-4 py-2 mt-2">
                    <img
                      className="w-10 h-10 ml-1 md:ml-5"
                      src="images/quotefront.png"
                    />
                    <h2 className="font-bold text-center text-lg md:text-2xl text-gray-800 tracking-normal">
                      {value.title}
                      <div className="px-5 md:px-20">
                        <p className="font-normal text-gray-700 px-2 mr-1 text-sm md:px-5 md:text-lg text-justify">
                          {value.desc}
                          <img
                            src="images/quotebottom.png"
                            className="w-10 h-10"
                          />
                        </p>
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
