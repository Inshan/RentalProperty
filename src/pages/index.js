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

const index = () => {
  return (
    <Layout>
      <div>
        <Hero />
        <div className="bg-slate-100 hidden sm:flex ">
          <Search />
        </div>
        <div
          className="w-full hidden sm:block "
          style={{ backgroundImage: `url(${Searchimg.src})` }}
        >
          <h1 className="py-72 text-5xl text-lime-  font-bold text-center -translate-y-1/4 ml-96 animate-pulse">
            <span className="bg-gray-400 bg-opacity-80 leading-loose p-4 px-8 rounded-md ">
              Your Ideal Property <br />
              &nbsp; Awaits You
            </span>
          </h1>
        </div>
        <Explore />
        <div className=" px-16 bg-green-50 mx-0  pb-16 ">
          <h1 className="text-3xl font-bold uppercase text-center pb-16 ">
            Trending Properties
          </h1>
          <div>
            <div className="hidden lg:flex ">
              <Trendingprop />
            </div>
            <div className="hidden sm:flex  lg:hidden ">
              <Trendingprop1 />
            </div>
            <div className=" flex sm:hidden  lg:hidden ">
              <Trendingprop2 />
            </div>
          </div>
        </div>

        <div className="bg-slate-500">
          <h1 className="text-3xl text-white font-bold uppercase text-center pb-8 pt-12">
            Featured Properties
          </h1>

          <div className="flex flex-wrap items-center justify-center bg-slate-500 gap-6 py-8 px-10">
            <Featured />
          </div>
        </div>

        <div className="bg-slate-500">
          <h1 className="text-3xl text-white font-bold uppercase text-center pb-8 pt-12">
            Recomended Properties
          </h1>

          <div className="flex flex-wrap items-center justify-center bg-slate-500 gap-6 py-8 px-10">
            <Recomended />
          </div>
        </div>

        <div className="bg-slate-500">
          <h1 className="text-3xl text-white font-bold uppercase text-center pb-8 pt-12">
            Latest Properties
          </h1>

          <div className="flex flex-wrap items-center justify-center bg-slate-500 gap-6 py-8 px-10">
            <Recomended />
          </div>
        </div>

        <div className="p-5 lg:p-5">
          <h1 className="text-3xl font-bold uppercase text-center pb-10">
            Realstate &nbsp;
            <span className="offset-1 text-indigo-400"> Agents </span>
          </h1>
         <Team_redo/>
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
