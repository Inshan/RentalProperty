import Contact from "@/components/Contact";
import React from "react";
import Layout from "./Layout";
import Bimg from "../../public/images/Banner-2.png";
import { BsArrowRight } from "react-icons/bs";

const contactpage = () => {
  return (
    <div>
      <Layout>
        <div>
          <div className="  " style={{ backgroundImage: `url(${Bimg.src})` }}>
            <div className="bg-black opacity-70 h-72 flex items-center ">
              <h1 className="text-white text-3xl  font-semibold  ml-28  ">
                Contact Us
              </h1>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap md:flex-nowrap lg:flex-nowrap  items-center  gap-1 justify-normal bg-teal-50 ">
          <div className="w-full  md:w-1/2 lg:w-1/2 xl:w-1/2 ">
            <div className="flex md:pl-16 sm:pl-12 pl-10 lg:pl-20 p-4 gap-20">
              <h1 className="text-3xl opacity-75">
                Wishing To Get A Dream House
              </h1>
            </div>
            <div className="py-8 md:px-12 px-8 lg:px-16">
              <p
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="px-4 text-xs opacity-50 "
              >
                Looking for your next dream rental? Look no further! Our rental
                site offers a handpicked selection of high-quality and
                affordable rental properties for you to choose from. Whether
                you're in the market for a luxurious apartment, a cozy bungalow,
                or a spacious family home, we have the perfect rental for you.
              </p>
              <div
                data-aos="fade-down"
                className="lg:pl-28 pt-16 flex items-center gap-1 justify-center "
              >
                <h3 className=" text-xs text-thin ">
                  contact us now, get your dream property
                </h3>
                <BsArrowRight className="text-xs" />
              </div>
            </div>
          </div>

          <div className="w-full  md:w-1/2  lg:w-1/2">
            <div className="hidden lg:flex  rounded-sm py-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226039.32845957216!2d85.07364388671873!3d27.721469400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1bda4a951f0f%3A0x3ddabb234891c3bd!2sBuddha%20Stupa!5e0!3m2!1sen!2snp!4v1682591295390!5m2!1sen!2snp"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="hidden sm:flex sm:items-center sm:justify-center  md:flex lg:hidden xl:hidden  rounded-sm py-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226039.32845957216!2d85.07364388671873!3d27.721469400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1bda4a951f0f%3A0x3ddabb234891c3bd!2sBuddha%20Stupa!5e0!3m2!1sen!2snp!4v1682591295390!5m2!1sen!2snp"
                width="400"
                height="250"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="flex  items-center justify-center px-2 w-full sm:hidden md:hidden lg:hidden xl:hidden  rounded-sm py-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226039.32845957216!2d85.07364388671873!3d27.721469400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1bda4a951f0f%3A0x3ddabb234891c3bd!2sBuddha%20Stupa!5e0!3m2!1sen!2snp!4v1682591295390!5m2!1sen!2snp"
                width="auto"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <Contact />
      </Layout>
    </div>
  );
};

export default contactpage;
