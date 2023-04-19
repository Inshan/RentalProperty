import Ldata from "@/components/data/Ldata";
import Pdata from "@/components/data/Pdata";
import Rdata from "@/components/data/Rdata";
import Tdata from "@/components/data/Tdata";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

//import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

//import ThumbGallery from "@/components/ThumbGallery";
import SingleBgimg from "../../../public/images/SingleBgimg.png";

import { useRouter } from "next/router";

import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import Trendingprop from "@/components/Trendingprop";
import Recomended from "@/components/Recomended";
//import ThumbGallery from "@/components/ThumbGallery";
//import property from "../property";

const Detail = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  var router = useRouter();
  const { id } = router.query;
  //var index = parseInt(id);
  // var index = parseInt(router.asPath.split("/").slice(-1)[0].split("?")[0]);
  var type = router.query.type;
  // const router = useRouter();
  // const { id } = router.query;
  // let filteredData;
  // console.log(typeof id, id);

  // const [objdata, setData] = useState("");
  // useEffect(() => {
  if ((id != undefined) & (type != undefined)) {
    if (type === "feature") {
      let returnindex = Pdata.cardData.findIndex((x) => x.id === parseInt(id));
      var objdata = Pdata.cardData[returnindex];
    } else if (type === "trending") {
      let returnindex = Pdata.cardData.findIndex((x) => x.id === parseInt(id));
      var objdata = Tdata.cardData[returnindex];
    } else if (type === "latest") {
      let returnindex = Pdata.cardData.findIndex((x) => x.id === parseInt(id));
      var objdata = Ldata.cardData[returnindex];
    } else {
      let returnindex = Pdata.cardData.findIndex((x) => x.id === parseInt(id));
      var objdata = Rdata.cardData[returnindex];
    }
  }
  // console.log(objdata);
  //   setData(asset);
  // }, [id, type]);

  return (
    <Layout>
      {objdata == undefined ? (
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <section className="bg-teal-50">
          <div
            className=" w-full  overflow-hidden bg-no-repeat bg-cover mb-4 "
            style={{ backgroundImage: `url(${SingleBgimg.src})` }}
          >
            <div
              className="h-48 mx-auto"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
            >
              <h1 className="text-6xl font-bold text-white  text-center pt-20  ">
                {objdata.title}
              </h1>
            </div>
          </div>

          <div className="flex px-20 ">
            <div className=" w-2/3 p-8  drop-shadow-lg rounded-lg ">
              <>
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  }}
                  spaceBetween={10}
                  navigation={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  thumbs={{
                    swiper:
                      thumbsSwiper && !thumbsSwiper.destroyed
                        ? thumbsSwiper
                        : null,
                  }}
                  loop={true}
                  className="mySwiper2"
                >
                  {objdata.images.map((value, index) => (
                    <SwiperSlide key={index}>
                      <div className="object-cover rounded-xl">
                        <img src={value} className="rounded-xl py-8  w-full " />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  {objdata.images.map((value, index) => (
                    <SwiperSlide key={index}>
                      <img src={value} className="rounded-lg cursor-pointer " />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </>
            </div>
            <div className="w-1/3 border-l border-solid border-gray-100 ">
              <div className="m-8 p-10 bg-gray-50 drop-shadow-lg mt-16 rounded-sm ">
                <h1 className="text-center py-1 text-3xl font-bold ">
                  Facilities
                </h1>
                <div>
                  <div className="flex items-center justify-around py-10 ">
                    <div>icon</div>
                    <div>Bedroom</div>
                  </div>
                  <div className="flex items-center justify-around">
                    <div>icon</div>
                    <div>Livingroom</div>
                  </div>
                  <div className="flex items-center justify-around py-10 ">
                    <div>icon</div>
                    <div>Fencing</div>
                  </div>
                  <div className="flex items-center justify-around ">
                    <div>icon</div>
                    <div>Garden</div>
                  </div>
                  <div className="flex items-center justify-around py-10">
                    <div>icon</div>
                    <div>Kitchen</div>
                  </div>
                </div>
              </div>
              <div className="m-8 p-10 bg-gray-50 drop-shadow-lg rounded-sm ">
                <div className=" flex items-center justify-around ">
                  <div>Price</div>
                  <div>Location</div>
                </div>
                <div className=" flex items-center justify-around ">
                  <div>200000</div>
                  <div>Basundhara</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex mt-8 mx-12 bg-teal-50 drop-shadow-sm ">
            <div className="w-1/2  border-t border-solid border-gray-100 mr-10 ">
              <div className="m-10 p-8 bg-gray-50 shadow-sm ">
                <h2 className="text-center text-3xl font-bold pb-8 ">
                  Description
                </h2>

                <p>
                  vent - compiled client and server successfully in 1573 ms (350
                  modules) wait - compiling... event - compiled client and
                  server successfully in 1347 ms (350 modules) wait -
                  compiling... event - compiled client and server successfully
                  in 928 ms (350 modules) wait - compiling... event - compiled
                  client and server successfully in 953 ms (350 modules) wait -
                  compiling... event - compiled client and server successfully
                  in 1664 ms (350 modules)
                </p>
              </div>
            </div>

            <div className="w-1/2 border-t border-solid border-gray-100 ">
              <div className="bg-gray-50 drop-shadow-md mt-10 mr-10 ">
                <div className=" text-center  pt-8 ">
                  <h2 className=" text-center text-3xl font-bold">Overview</h2>
                </div>
                <div className="px-10 pb-10 pt-4  ">
                  <div className="flex px-16 items-center justify-between py-5 ">
                    <div>ProductId</div>
                    <div>2246888</div>
                  </div>
                  <div className="flex px-16 items-center justify-between">
                    <div>ProductId</div>
                    <div>2246888</div>
                  </div>
                  <div className="flex px-16 items-center justify-between py-5 ">
                    <div>ProductId</div>
                    <div>2246888</div>
                  </div>
                  <div className="flex px-16 items-center justify-between">
                    <div>ProductId</div>
                    <div>2246888</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section>
            <div className="py-10">
              <h1 className=" text-center  text-3xl font-bold  ">
                Desirable Properties
              </h1>
            </div>
            <div className="flex items-center justify-center gap-8  ">
              <Recomended />
            </div>
          </section>
          <div className="pt-10">
            <h1 className=" text-center  text-3xl font-bold  ">
              Trending Properties In KTM
            </h1>
          </div>

          <div className="flex items-center justify-center mx-14 py-10 ">
            <Trendingprop />
          </div>
          <section></section>
        </section>
      )}
    </Layout>
  );
};

export default Detail;
