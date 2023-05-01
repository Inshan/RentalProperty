import React from "react";
import Layout from "./Layout";
import Hero from "@/components/Hero";
import Team, { Team1, Team2 } from "@/components/Team";
//import SearchBar from "@/components/SearchBar";
import Contact from "@/components/Contact";
import Trendingprop, {
  Trendingprop1,
  Trendingprop2,
} from "@/components/Trendingprop";
import Searchimg from "../../public/images/searchimg.png";
import Explore from "@/components/Explore";
import Featured from "@/components/Featured";
import Recomended from "@/components/Recomended";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

//import SearchBg from "../../public/images/sbg.png";
import RentOrBuy, {
  RentOrBuy1,
  RentOrBuy2,
  RentOrBuy3,
} from "@/components/RentOrBuy";
import Modal from "@/components/modal/Modal";

const Index = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout>
      <div className="scroll-smooth">
        <Hero />

        <div
          className="w-full hidden text-center sm:hidden lg:flex bg-no-repeat bg-cover min-h-screen py-0 my-0 "
          style={{ backgroundImage: `url(${Searchimg.src})` }}
        >
          <div
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="500"
            className="flex justify-end w-full mr-48 pt-20"
          >
            <div className="bg-white h-20 rounded-lg w-1/3 grid place-items-center drop-shadow-sm  ">
              <h1 className="text-3xl opacity-50 font-bold">
                Your Ideal Property
              </h1>
              <h2 className="text-3xl opacity-50 font-bold">await you</h2>
            </div>
          </div>
        </div>
        <Explore />
        <div className=" pl-8  bg-green-50 mx-0  pb-16 ">
          <h1
            data-aos="zoom-in"
            className=" text-2xl font-bold uppercase text-center pb-8 pr-6 "
          >
            Latest Properties
          </h1>
          <div>
            <div className="hidden lg:flex px-10 ">
              <Trendingprop />
            </div>
            <div className="hidden sm:flex  lg:hidden ">
              <Trendingprop1 />
            </div>
            <div className=" flex sm:hidden  lg:hidden w-full">
              <Trendingprop2 />
            </div>
          </div>
        </div>

        <div>
          <div className=" hidden lg:flex bg-green-50 px-20 pb-10  ">
            <RentOrBuy />
          </div>
          <div className="hidden md:flex  lg:hidden sm:hidden bg-green-50 px-10 ">
            <RentOrBuy1 />
          </div>
          <div className="hidden sm:flex md:hidden lg:hidden  bg-green-50 px-6 ">
            <RentOrBuy2 />
          </div>
          <div className=" flex lg:hidden md:hidden sm:hidden bg-green-50 px-6 ">
            <RentOrBuy3 />
          </div>
        </div>

        <Modal />
        <div className="bg-slate-500 ">
          <h1
            data-aos="zoom-in"
            className=" text-2xl lg:text-3xl  text-white font-bold uppercase text-center pb-8 pt-12"
          >
            Trending Properties
          </h1>

          <div
            data-aos="zoom-in"
            className="flex flex-wrap items-center justify-evenly bg-slate-500  gap-8 px-4 py-0 md:px-10 lg:gap-14 lg:px-16"
          >
            <Featured />
          </div>
        </div>

        <div className="bg-slate-500">
          <h1
            data-aos="zoom-in"
            className=" text-2xl lg:text-3xl text-white font-bold uppercase text-center pb-8 pt-12"
          >
            Desirable Properties
          </h1>

          <div
            // data-aos="fade-left"
            className="flex flex-wrap items-center justify-evenly bg-slate-500 gap-4 px-4 py-0 md:px-10 lg:gap-14 lg:px-16 pb-10"
          >
            <Recomended />
          </div>
        </div>

        <div className="p-8 py-12 mx-5  ">
          <h1
            data-aos="zoom-in"
            className="text-3xl font-bold uppercase text-center pb-10"
          >
            Realstate &nbsp;
            <span className="offset-1 text-orange-400">Agents</span>
          </h1>

          <div className="hidden   lg:flex lg:gap-8 mx-6 drop-shadow-sm ">
            <Team />
          </div>
          <div className="hidden md:block align-center lg:hidden">
            <Team1 />
          </div>
          <div className=" lg:hidden">
            <Team2 />
          </div>
        </div>

        <div className="bg-lime-200  mb-0">
          <Contact />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
