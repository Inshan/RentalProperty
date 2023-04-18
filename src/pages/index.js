import React from "react";
import Layout from "./Layout";
import Hero from "@/components/Hero";
import Team from "@/components/Team_redo";
import Search from "@/components/Search";
import Contact from "@/components/Contact";
import Trendingprop, {
  Trendingprop1,
  Trendingprop2,
} from "@/components/Trendingprop";
import Searchimg from "../../public/images/searchimg.png";
import Explore from "@/components/Explore";
import Featured from "@/components/Featured";
import Blog from "@/components/blog";
import Services from "@/components/services";
import Recomended from "@/components/Recomended";
import Team_redo from "@/components/Team_redo";
import SearchBg from "../../public/images/sbg.png";
import RentOrBuy, {
  RentOrBuy1,
  RentOrBuy2,
  RentOrBuy3,
} from "@/components/RentOrBuy";

const index = () => {
  return (
    <Layout>
      <div>
        <Hero />

        <div
          className="w-full hidden sm:hidden lg:flex bg-no-repeat bg-cover min-h-screen py-0 my-0 "
          style={{ backgroundImage: `url(${Searchimg.src})` }}
        >
          <h1 className="py-48 text-5xl  font-bold text-center -translate-y-1/4 ml-96 ">
            <span className="bg-gray-400 bg-opacity-10 leading-loose p-4 px-8 rounded-md animate-pulse ">
              Your Ideal Property <br />
              &nbsp; Awaits You
            </span>
          </h1>
        </div>
        <Explore />
        <div className=" pl-8  bg-green-50 mx-0  pb-16 ">
          <h1 className=" text-2xl font-bold uppercase text-center pb-8 pr-6 ">
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
          <div className=" hidden lg:flex bg-green-50 px-20  ">
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

        <div className="bg-slate-500 ">
          <h1 className=" text-2xl lg:text-3xl  text-white font-bold uppercase text-center pb-8 pt-12">
            Trending Properties
          </h1>

          <div className="flex flex-wrap items-center justify-evenly bg-slate-500 gap-8 px-4 py-0 md:px-10 lg:px-14">
            <Featured />
          </div>
        </div>

        <div className="bg-slate-500">
          <h1 className=" text-2xl lg:text-3xl text-white font-bold uppercase text-center pb-8 pt-12">
            Desirable Properties
          </h1>

          <div className="flex flex-wrap items-center justify-evenly bg-slate-500 gap-8 px-4 py-0 md:px-10 lg:px-14 pb-10">
            <Recomended />
          </div>
        </div>

        <div className="p-5 lg:p-5">
          <h1 className="text-3xl font-bold uppercase text-center pb-10">
            Realstate &nbsp;
            <span className="offset-1 text-indigo-400"> Agents </span>
          </h1>
          <Team_redo />
        </div>
        <div className="bg-lime-200  mb-0">
          <Contact />
        </div>
      </div>
      {/* <Services/> */}
      {/* <Blog /> */}
    </Layout>
  );
};

export default index;
