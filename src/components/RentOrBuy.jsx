import React from "react";
//import Tdata from "./data/Tdata";
import Randbimg from "./data/Randbimg";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const RentOrBuy = () => {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        centeredSlides={false}
        className="mySwiper"
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay, Navigation]}
      >
        <div className="flex flex-wrap gap-10  ">
          {Randbimg.map((itr) => (
            <SwiperSlide key={itr.id}>
              <Link href="/property">
                <div
                  className=" w-full  overflow-hidden bg-no-repeat bg-cover mb-4 rounded-lg  "
                  style={{ backgroundImage: `url(${itr.img})` }}
                >
                  <div
                    className="h-48 mx-auto rounded-lg "
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
                  >
                    <h1 className="text-xl font-bold text-white  text-center pt-20  ">
                      {itr.category}
                    </h1>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};
export default RentOrBuy;

export const RentOrBuy1 = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={false}
        className="mySwiper"
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay, Navigation]}
      >
        <div className="flex flex-wrap gap-10  ">
          {Randbimg.map((itr) => (
            <SwiperSlide key={itr.id}>
              <div
                className=" w-full  overflow-hidden bg-no-repeat bg-cover mb-4 rounded-lg  "
                style={{ backgroundImage: `url(${itr.img})` }}
              >
                <div
                  className="h-48 mx-auto rounded-lg "
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
                >
                  <h1 className="text-xl font-bold text-white  text-center pt-20  ">
                    {itr.category}
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};

export const RentOrBuy2 = () => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        centeredSlides={false}
        className="mySwiper"
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay, Navigation]}
      >
        <div className="flex flex-wrap gap-10  ">
          {Randbimg.map((itr) => (
            <SwiperSlide key={itr.id}>
              <Link href={"/property"}>
                <div
                  className=" w-full  overflow-hidden bg-no-repeat bg-cover mb-4 rounded-lg  "
                  style={{ backgroundImage: `url(${itr.img})` }}
                >
                  <div
                    className="h-48 mx-auto rounded-lg "
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
                  >
                    <h1 className="text-xl font-bold text-white  text-center pt-20  ">
                      {itr.category}
                    </h1>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};

export const RentOrBuy3 = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={false}
        className="mySwiper"
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay, Navigation]}
      >
        <div className="flex flex-wrap gap-10  ">
          {Randbimg.map((itr) => (
            <SwiperSlide key={itr.id}>
              <Link href="/property">
                <div
                  className=" w-full  overflow-hidden bg-no-repeat bg-cover mb-4 rounded-lg  "
                  style={{ backgroundImage: `url(${itr.img})` }}
                >
                  <div
                    className="h-48 mx-auto rounded-lg "
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
                  >
                    <h1 className="text-xl font-bold text-white  text-center pt-20  ">
                      {itr.category}
                    </h1>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};
