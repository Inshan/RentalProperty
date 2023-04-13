import React, { useState } from "react";
//import { GiHamburgerMenu } from "react-icons/gi";
import { Ham } from "./Icons";
//const [navbar, setNavbar] = useState(false);

const Nav1 = () => {
  return (
    <>
      <nav className=" hidden sticky top-0  z-50 lg:flex items-center justify-around w-full h-20 bg-teal-50 bg-opacity-100">
        <div>
          <img src="../../images/logo1.png" />
        </div>
        <div>
          <ul className="flex items-center justify-center gap-8 uppercase">
            <li
              name="home"
              className="hover:text-blue-600 hover:cursor-pointer transition-all duration-300 hover:ease-in font-semibold "
            >
              home
            </li>
            <li
              name="about"
              className="hover:text-blue-600 hover:cursor-pointer transition-all duration-300 hover:ease-in font-semibold "
            >
              about
            </li>
            <li
              name="services"
              className="hover:text-blue-600 hover:cursor-pointer transition-all duration-300 hover:ease-in font-semibold "
            >
              services
            </li>
            <li
              name="property"
              className="hover:text-blue-600 hover:cursor-pointer transition-all duration-300 hover:ease-in  font-semibold "
            >
              Property
            </li>
            <li
              name="projects"
              className="hover:text-blue-600 hover:cursor-pointer transition-all duration-300 hover:ease-in font-semibold "
            >
              Blog
            </li>
            <li
              name="contact"
              className="hover:text-blue-600 hover:cursor-pointer transition-all duration-300 hover:ease-in font-semibold "
            >
              contact
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-8">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            LogIn
          </button>
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            SignUp
          </button>
        </div>
      </nav>

      <nav className=" flex sticky top-0  z-50 lg:hidden items-center justify-around w-full h-20 bg-teal-50 bg-opacity-100">
        <div>
          <img src="../../images/logo1.png" />
        </div>

        <div>
          <Ham />
        </div>
      </nav>
    </>
  );
};

export default Nav1;
