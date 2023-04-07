import Card from "./CardList";
import { Card1, Card2, Card3, Card4, Card5 } from "./CardList";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import "./styles.css";
import { Pagination } from "swiper";

const Trendingprop = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card1 />
        </SwiperSlide>
        <SwiperSlide>
          <Card2 />
        </SwiperSlide>
        <SwiperSlide>
          <Card3 />
        </SwiperSlide>
        <SwiperSlide>
          <Card4 />
        </SwiperSlide>
        <SwiperSlide>
          <Card5 />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Trendingprop;
