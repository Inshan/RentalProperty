import {
  CardList1,
  CardList2,
  CardList3,
  CardList4,
  CardList5,
} from "./ClientCardList";
import CardList from "./ClientCardList";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import "./styles.css";
import { Pagination } from "swiper";

const Team = () => {
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
          <CardList />
        </SwiperSlide>
        <SwiperSlide>
          <CardList1 />
        </SwiperSlide>
        <SwiperSlide>
          <CardList2 />
        </SwiperSlide>
        <SwiperSlide>
          <CardList3 />
        </SwiperSlide>
        <SwiperSlide>
          <CardList4 />
        </SwiperSlide>
        <SwiperSlide>
          <CardList5 />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Team;
