import React from "react";
import Layout from "./Layout";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Search from "@/components/Search";
import Contact from "@/components/Contact";
import Trendingprop from "@/components/Trendingprop";
import Searchimg from "../../public/images/searchimg.png";
import Explore from "@/components/Explore";
import Featured from "@/components/Featured";
import Blog from "@/components/blog";
import Services from "@/components/services";

const index = () => {
  return (
    <Layout>
      <div>
        <Hero />

        <Explore />

        <div
          className="w-full  "
          style={{ backgroundImage: `url(${Searchimg.src})` }}
        >
          <h1 className="py-72 text-3xl  font-bold text-center -translate-y-1/4 ml-96 ">
            Get Your Dream House
          </h1>
        </div>

        <div className=" -translate-y-3/4 ">
          <Search />
        </div>

        <div className=" p-16 bg-green-50 mx-0  ">
          <h1 className="text-3xl font-bold uppercase text-center pb-10">
            Trending Properties
          </h1>
          <div>
            <Trendingprop />
          </div>
        </div>

        <div className="bg-slate-500">
          <h1 className="text-3xl font-bold uppercase text-center pb-8 pt-12">
            Featured Properties
          </h1>

          <div className="flex flex-wrap items-center justify-center bg-slate-500 gap-6 py-8 px-10">
            <Featured />
          </div>
        </div>

        <div className="m-20 py-30  ">
          <Team />
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
