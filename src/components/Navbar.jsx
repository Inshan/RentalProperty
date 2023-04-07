import React, { useState } from "react";
//const [navbar, setNavbar] = useState(false);

const Tab = [
  { name: "home", link: "/" },
  { name: "services", link: "/" },
  { name: "about", link: "/" },
  { name: "blog", link: "/" },
  { name: "contact", link: "/" },
];

const Nav1 = () => {
  return (
    <>
      <nav className="sticky top-0  z-50 flex items-center justify-around w-full h-20 bg-teal-50 bg-opacity-100">
        <div>
          <img src="../../images/logo1.png" />
        </div>
        <div>
          <ul className="flex items-center justify-center gap-8 uppercase">
            <li
              name="home"
              className="hover:text-red-300 hover:cursor-pointer transition-all duration-300 hover:ease-in font-semibold "
            >
              home
            </li>
            <li
              name="about"
              className="hover:text-red-300 hover:cursor-pointer transition-all duration-300 hover:ease-in font-semibold "
            >
              about
            </li>
            <li
              name="services"
              className="hover:text-red-300 hover:cursor-pointer transition-all duration-300 hover:ease-in font-semibold "
            >
              services
            </li>
            <li
              name="property"
              className="hover:text-red-300 hover:cursor-pointer transition-all duration-300 hover:ease-in  font-semibold "
            >
              Property
            </li>
            <li
              name="projects"
              className="hover:text-red-300 hover:cursor-pointer transition-all duration-300 hover:ease-in font-semibold "
            >
              projects
            </li>
            <li
              name="contact"
              className="hover:text-red-300 hover:cursor-pointer transition-all duration-300 hover:ease-in font-semibold "
            >
              contact
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-8">
          <button>LogIn</button>
          <button>SignUp</button>
        </div>
      </nav>
    </>
  );
};

export default Nav1;
