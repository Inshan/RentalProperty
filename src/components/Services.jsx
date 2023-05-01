//import Link from "next/link";
import React from "react";
import Bimg from "../../public/images/Banner-2.png";
import Image from "next/image";
import Services from "../../public/images/services.png";
import { BsHouses, BsFullscreen } from "react-icons/bs";
import Contact from "./Contact";
import { BsArrowRight } from "react-icons/bs";
import { HiOutlineCircleStack } from "react-icons/hi2";
import {
  MdOutlineProductionQuantityLimits,
  MdOutlineManageHistory,
} from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Services_try = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="  " style={{ backgroundImage: `url(${Bimg.src})` }}>
        <div className="bg-black opacity-70 h-72 flex items-center ">
          <h1 className="text-white text-3xl  font-semibold md:ml-24  ml-20 lg:ml-28  ">
            Our Services
          </h1>
        </div>
      </div>

      <div className="  bg-teal-50  ">
        <div
          data-aos="fade-right"
          className=" flex flex-wrap md:flex-nowrap lg:flex-nowrap justify-around items-center rounded-sm shadow-sm"
        >
          <div className="lg:w-1/2 md:w-1/2 xl:w-1/2  w-full  text-left ">
            <h1 className=" text:xl lg:text-3xl md:text-2xl  font-semibold p-10 lg:pb-10 lg:px-5 opacity-80  ">
              We provide best property Services
            </h1>
            <p className=" px-8 text-xs md:text-sm lg:text-xl lg:px-5 text-justify tracking-tighter opacity-80 ">
              we are committed to providing exceptional service to our clients.
              We believe in building long-term relationships with our clients
              and ensuring that they are satisfied with their experience. Our
              goal is to become your trusted partner in rental property for
              life.
            </p>
          </div>

          <div className="text-xl text-black">
            <div className="py-10 mx-8 grid place-items-center">
              <Image height={400} width={400} src={Services} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-teal-50 drop-shadow-sm lg:p-4 md:p-4 sm:p-2 p-1 ">
        <div className="text-xl md:text-2xl lg:text-2xl font-bold lg:ml-28 sm:ml-16  md:ml-20 flex items-center justify-center gap-2 ">
          <h1 data-aos="zoom-in" className="opacity-80">
            List of services we provide
          </h1>
          <span>
            <BsArrowRight />
          </span>
        </div>

        <div className="flex flex-wrap md:flex-nowrap xl:flex-nowrap lg:flex-nowrap justify-between  sm:px-10 md:px-4 px-4 lg:px-20 py-10 gap-8 ">
          <div
            data-aos="fade-right"
            className="min-w-min    md:w-1/2 xl:w-1/2 lg:w-1/2  h-30   bg-white drop-shadow-md  p-4 hover:transition-all  hover:shadow-lg  "
          >
            <h1 className="text-xl font-bold pb-4 pl-8  text-orange-500 hover:underline hover:text-orange-300  cursor-pointer ">
              Property Lisiting
            </h1>
            <div className="text-6xl ml-20 pb-2 ">
              <BsHouses />
            </div>

            <p className="px-8  self-auto text-xs sm:text-sm md:text-sm lg:text-sm text-justify tracking-tighter opacity-75  ">
              Providing a database of available rental properties to search
              through, with details such as location, number of
              bedrooms/bathrooms, rental price, and photos.
            </p>
          </div>

          <div
            data-aos="fade-left"
            className=" min-w-min    md:w-1/2  xl:w-1/2  lg:w-1/2     h-30   bg-white drop-shadow-md   p-4 hover:transition-all  hover:shadow-lg "
          >
            <h1 className="text-xl font-bold pb-4  pl-8  text-orange-500 hover:underline hover:text-orange-300 cursor-pointer ">
              Property Sales
            </h1>

            <div className="text-6xl ml-20 pb-2 ">
              <MdOutlineProductionQuantityLimits />
            </div>

            <p className="px-8 text-xs sm:text-sm md:text-sm lg:text-sm text-justify tracking-tighter opacity-75  ">
              Offering assistance to property owners who are interested in
              selling their rental property, including property valuation,
              marketing, and negotiation of sales contracts.
            </p>
          </div>
        </div>

        <div
          data-aos="fade-right"
          className="flex flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap justify-between md:px-4 sm:px-10 px-8 lg:px-20 py-10 gap-8 "
        >
          <div className="min-w-min   md:w-1/2 xl:w-1/2 lg:w-1/2  h-30   bg-white drop-shadow-md  p-4 hover:transition-all  hover:shadow-lg  ">
            <h1 className="text-xl font-bold pb-4 pl-8 cursor-pointer text-orange-500 hover:underline hover:text-orange-300 ">
              Lease Agreements
            </h1>
            <div className="text-6xl ml-20 pb-2 ">
              <IoNewspaperOutline />
            </div>

            <p className="px-8 text-justify tracking-tighter text-xs sm:text-sm md:text-sm lg:text-sm opacity-75 ">
              Conducting background checks on potential tenants, including
              credit checks, employment verification, and criminal history
              checks, to ensure that the tenant is a good fit for the property.
            </p>
          </div>

          <div
            data-aos="fade-left"
            className="min-w-min   md:w-1/2 xl:w-1/2 lg:w-1/2 h-30   bg-white drop-shadow-md   p-4 hover:transition-all  hover:shadow-lg "
          >
            <h1 className="text-xl font-bold pb-4  pl-8 cursor-pointer  text-orange-500 hover:underline hover:text-orange-300 ">
              Rent Collection
            </h1>

            <div className="text-6xl ml-20 pb-2 ">
              <HiOutlineCircleStack />
            </div>

            <p className="px-8 text-justify tracking-tighter text-xs sm:text-sm md:text-sm lg:text-sm  opacity-75 ">
              Drafting legally binding lease agreements between the property
              owner and the tenant, outlining the terms of the rental agreement,
              including rent payments and security deposit.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-right"
          className="flex flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap justify-between md:px-4  sm:px-10 px-4 lg:px-20 py-10 gap-8 "
        >
          <div className="min-w-min   md:w-1/2 xl:w-1/2 lg:w-1/2 h-30   bg-white drop-shadow-md  p-4 hover:transition-all  hover:shadow-lg  ">
            <h1 className="text-xl font-bold pb-4 pl-8  cursor-pointer text-orange-500 hover:underline hover:text-orange-300 ">
              Property Management
            </h1>
            <div className="text-6xl ml-20 pb-2 ">
              <MdOutlineManageHistory />
            </div>

            <p className="px-8 text-justify tracking-tighter text-xs sm:text-sm md:text-sm lg:text-sm  opacity-75 ">
              Conducting regular inspections of rental properties to ensure that
              they are in good condition and identifying any maintenance or
              repair issues that need to be addressed.
            </p>
          </div>

          <div
            data-aos="fade-left"
            className="min-w-min   md:w-1/2 xl:w-1/2 lg:w-1/2  h-30   bg-white drop-shadow-md   p-4 hover:transition-all  hover:shadow-lg "
          >
            <h1 className="text-xl font-bold pb-4  pl-8 cursor-pointer  text-orange-500 hover:underline hover:text-orange-300 ">
              Tenant Screening
            </h1>

            <div className="text-6xl ml-20 pb-2 ">
              <BsFullscreen />
            </div>

            <p className="px-8  text-justify tracking-tighter text-xs sm:text-sm md:text-sm lg:text-sm opacity-75  ">
              Acting as a liaison between the property owner and tenant,
              handling communication related to maintenance requests, rent
              payments, lease renewals, and any other issues that may arise.
            </p>
          </div>
        </div>
      </div>

      <Contact />
    </>
  );
};

export default Services_try;
