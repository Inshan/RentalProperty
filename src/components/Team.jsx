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
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        // centeredSlides={true}
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
            <div>
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                <div className="flex flex-col items-center pb-10">
                  <img
                    className="w-28 h-28 mb-3 rounded-full shadow-lg"
                    src={value.img}
                    alt="Bonnie image"
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 ">
                    {value.name}
                  </h5>
                  <span className="text-sm text-gray-500">{value.post}</span>

                  <div className="px-12 text-justify mt-4">
                    <p>{value.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default Team;

export const Team1 = () => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        // centeredSlides={true}
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
            <div>
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                <div className="flex justify-end px-4 pt-4">
                  {/* Dropdown menu */}
                  <div
                    id="dropdown"
                    className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
                  >
                    <ul className="py-2" aria-labelledby="dropdownButton">
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                        >
                          Edit
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                        >
                          Export Data
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 "
                        >
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col items-center pb-10">
                  <img
                    className="w-24 h-24 mb-3 rounded-full shadow-lg"
                    src={value.img}
                    alt="Bonnie image"
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 ">
                    {value.name}
                  </h5>
                  <span className="text-sm text-gray-500 ">{value.post}</span>

                  <div className="px-12 text-justify mt-4">
                    <p>{value.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export const Team2 = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        // centeredSlides={true}
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
            <div>
              <div className="w-full bg-white border border-gray-200 rounded-lg shadow ">
                <div className="flex flex-col  items-center pb-5 py-10 ">
                  <img
                    className="w-28 h-28 mb-3 rounded-full shadow-lg"
                    src={value.img}
                    alt="Bonnie image"
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 ">
                    {value.name}
                  </h5>
                  <span className="text-sm text-gray-500 ">{value.post}</span>

                  <div className="px-12 text-justify  mt-4 min-w-full ">
                    <p>{value.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
