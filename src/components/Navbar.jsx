import React, { useState } from "react";
//import { GiHamburgerMenu } from "react-icons/gi";
import { Ham } from "./Icons";
//const [navbar, setNavbar] = useState(false);
import Link from "next/link";
import {
  BsHouseCheck,
  BsInfoCircle,
  BsHouseGear,
  BsBuildings,
  BsPerson,
} from "react-icons/bs";

import { AiOutlineEdit, AiOutlinePhone } from "react-icons/ai";

const Nav1 = () => {
  const [nav, setNav] = useState(false);

  const handleChange = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className=" hidden sticky top-0  z-50 lg:flex items-center justify-between lg:px-14 w-full h-16 bg-teal-50 bg-opacity-100">
        <div>
          <img src="../../images/logo1.png" height={160} width={160} />
        </div>
        <div>
          <ul className="flex items-center justify-center gap-8 uppercase">
            <li
              name="home"
              className="hover:text-blue-600  antialiased text-sm hover:cursor-pointer transition-all duration-300 hover:ease-in font-semibold "
            >
              <Link href={"/"}>
                <div className="flex gap-1">
                  home <BsHouseCheck className="text-xl" />
                </div>
              </Link>
            </li>
            <li
              name="about"
              className="hover:text-blue-600 text-sm hover:cursor-pointer transition-all duration-300 hover:ease-in font-semibold "
            >
              <Link href={"/about"}>
                {" "}
                <div className="flex gap-1">
                  about <BsInfoCircle className="text-xl" />
                </div>
              </Link>
            </li>
            <li
              name="services"
              className="hover:text-blue-600 text-sm hover:cursor-pointer transition-all duration-300 hover:ease-in font-semibold "
            >
              <Link href={"/services"}>
                {" "}
                <div className="flex gap-1">
                  services <BsHouseGear className="text-xl" />
                </div>
              </Link>
            </li>
            <li
              name="services"
              className="hover:text-blue-600 text-sm hover:cursor-pointer transition-all duration-300 hover:ease-in  font-semibold "
            >
              <Link href={"/property"}>
                {" "}
                <div className="flex gap-1">
                  property <BsBuildings className="text-xl" />
                </div>
              </Link>
            </li>
            <li
              name="property"
              className="hover:text-blue-600 text-sm hover:cursor-pointer transition-all duration-300 hover:ease-in font-semibold "
            >
              <Link href={"/blog"}>
                <div className="flex gap-1">
                  blog <AiOutlineEdit className="text-xl" />
                </div>
              </Link>
            </li>
            <li
              name="contact"
              className="hover:text-blue-600 text-sm hover:cursor-pointer transition-all duration-300 hover:ease-in font-semibold "
            >
              <Link href={"/contact"}>
                <div className="flex gap-1">
                  contact <BsPerson className="text-xl" />
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-8">
          <button
            type="button"
            className="text-white mt-2 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            LogIn
          </button>
          <button
            type="button"
            className="text-white mt-2 bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            SignUp
          </button>
        </div>
      </nav>

      <nav className=" flex sticky pl-4 pr-6  top-0  z-50 lg:hidden items-center justify-between w-full h-16 bg-teal-50 bg-opacity-100">
        <div>
          <img src="../../images/logo1.png" height={160} width={160} />
        </div>

        <div onClick={() => setNav((prev) => !prev)} className="cursor-pointer">
          <Ham />
        </div>

        <div className={nav ? "showMenuNav" : "hideMenuNav"}>
          <div
            className="absolute top-0 right-0 px-8 py-8 cursor-pointer"
            onClick={() => setNav(false)}
          >
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <ul className="flex flex-col items-center justify-between min-h-[250px] text-white font-bold">
            <li className="border-b border-gray-400 my-8 uppercase hover:text-blue-600 hover:cursor-pointer transition-all duration-300 hover:ease-in">
              <Link href="/">Home</Link>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase hover:text-blue-600 hover:cursor-pointer transition-all duration-300 hover:ease-in">
              <Link href="/about">About</Link>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase hover:text-blue-600 hover:cursor-pointer transition-all duration-300 hover:ease-in">
              <Link href="/services">Services</Link>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase hover:text-blue-600 hover:cursor-pointer transition-all duration-300 hover:ease-in">
              <Link href="/property">Property</Link>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase hover:text-blue-600 hover:cursor-pointer transition-all duration-300 hover:ease-in">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase hover:text-blue-600 hover:cursor-pointer transition-all duration-300 hover:ease-in">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: #ada9a9;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </>
  );
};

export default Nav1;
