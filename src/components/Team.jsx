import Adata from "./data/Adata";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import "./styles.css";
//import { Pagination } from "swiper";

const Team = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
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
        <div className="flex flex-wrap">
          {Adata.cardData.map((value, index) => (
            <SwiperSlide key={index}>
              <div className="w-full max-w-sm bg-white border rounded-sm ">
                <div className="flex flex-col items-center py-10 ">
                  <img
                    className="w-24 h-24 mb-3 rounded-full shadow-lg"
                    src={value.img}
                    alt="Bonnie image"
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900">
                    {value.name}
                  </h5>
                  <span className="text-sm text-gray-500 ">{value.post}</span>
                  <div className="px-10 pt-4 text-sm text-justify">
                    <p>{value.desc}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};
export default Team;

export const Team1 = () => {
  return (
    <div>
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
              <div className="w-full max-w-sm bg-white border rounded-sm ">
                <div className="flex flex-col items-center py-10 ">
                  <img
                    className="w-24 h-24 mb-3 rounded-full shadow-lg "
                    src={value.img}
                    alt="Bonnie image"
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900">
                    {value.name}
                  </h5>
                  <span className="text-sm text-gray-500 ">{value.post}</span>
                  <div className="px-10 pt-4 text-xs text-justify">
                    <p>{value.desc}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export const Team2 = () => {
  return (
    <div>
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
              <div className=" w-full min-w-full bg-white border rounded-sm ">
                <div className="grid  place-items-center py-10 ">
                  <img
                    className="w-24 h-24 mb-3 rounded-full shadow-lg  "
                    src={value.img}
                    alt="Bonnie image"
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900">
                    {value.name}
                  </h5>
                  <span className="text-sm text-gray-500 ">{value.post}</span>
                  <div className="px-10 pt-4 text-sm text-justify">
                    <p>{value.desc}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
