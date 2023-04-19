import Adata from "./data/Adata";
//import Featured from "./Featured";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import "./styles.css";

const Team = () => {
  return (
    <div>
      {/* ---------------------------------------------------------------------------------------------- */}
    <div className="hidden md:hidden lg:block">
    <Swiper
        slidesPerView={3}
        spaceBetween={5}
        centeredSlides={false}
        className="mySwiper"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay, Navigation]}
      >
     {Adata.cardData.map((value, index) => (
     <SwiperSlide key={index}>
     <div className="mx-auto h-42 lg:p-5 lg:my-5">
      <div className="bg-white h-auto shadow-2xl mb-6 mx-1 py-1 lg:py-5">
      <img className="mx-auto p-2 w-28 h-28 object-cover rounded-full shadow" src={value.img} alt="avatar" />
      
        <div className="py-2 mt-2">
        <h2 className="font-bold text-center text-base lg:text-xl text-gray-800 tracking-normal">{value.post}
        <div className="p-3 lg:text-xl text-center">{value.name}</div>

          <div className='px-5 lg:px-5' >
          <p className="font-normal text-gray-700 pt-5 text-base lg:text-justify lg:px-5 lg:text-xl">{value.desc}</p>
          </div>
          </h2>
        </div>
      </div>

    </div>
    </SwiperSlide>
    ))}
    </Swiper>
    </div>
    {/* -------------------------------------------------------------------------------------------------------------- */}
    <div className="hidden md:block lg:hidden">
    <Swiper
        slidesPerView={2}
        spaceBetween={15}
        centeredSlides={false}
        className="mySwiper"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay, Navigation]}
      >
     {Adata.cardData.map((value, index) => (
     <SwiperSlide key={index}>
     <div className="mx-auto h-42 md:p-3 my-3">
      <div className="bg-white h-auto shadow-2xl mb-6 mx-1 md:mx-5 py-1 md:py-3">
      <img className="p-3 mx-auto w-28 h-28 object-cover rounded-full shadow" src={value.img} alt="avatar" />
      
        <div className="md:px-2 py-2 mt-2">
        <h2 className="font-bold text-center text-base md:text-lg text-gray-800 tracking-normal">{value.post}
        <div className="p-2 md:text-lg text-center">{value.name}</div>

          <div className='px-5 md:px-8' >
          <p className="font-normal text-gray-700 px-2 mr-1 text-lg md:px-2 md:text-lg md:text-justify">{value.desc}</p>
          </div>
        
          </h2>
        </div>
      </div>

    </div>
    </SwiperSlide>
    ))}
    </Swiper>
    </div>

    {/* -------------------------------------------------------------------------------------------------------------- */}
    <div className="md:hidden lg:hidden">
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
     {Adata.cardData.map((value, index) => (
     <SwiperSlide key={index}>
     <div className="mx-auto h-42 p-2 my-2">
      <div className="bg-white h-auto shadow-2xl mb-6 mx-1 py-1">
      <img className="p-2 mx-auto w-28 h-28 object-cover rounded-full shadow" src={value.img} alt="avatar" />
      
        <div className="px-4 py-2 mt-2">
        <h2 className="font-bold text-center text-base md:text-2xl text-gray-800 tracking-normal">{value.post}
        <div className="p-1 first-line text-base text-center">{value.name}</div>

          <div className='p-3' >
          <p className="font-normal text-gray-700 px-2 mr-1 text-base text-justify">{value.desc}</p>

          </div>
        
          </h2>
        </div>
      </div>

    </div>
    </SwiperSlide>
    ))}
    </Swiper>
    </div>
    </div>
  )
}
export default Team
