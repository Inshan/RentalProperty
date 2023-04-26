import React, { useEffect, useState } from "react";
//import Selector from "./DropSelect";
import Mainimg from "../../public/images/mainimg.png";
//import SearchBar from "./SearchBar";
import Droption from "./search/Droption";
//import SearchBar from "./SearchBar";
//import Subimg from "../../public/images/subimg.png";

const Hero = () => {
  // console.log(Mainimg);
  const [bounce, setBounce] = useState("animate-bounce");

  // const handleBounce = () => {
  //   setTimeout(() => {
  //     setBounce("animate-bounce");
  //   }, 100);
  // };

  useEffect(() => {
    setTimeout(() => {
      setBounce("");
    }, 3200);
  }, []);

  return (
    <>
      {/* component */}
      <div className="h-screen-max  bg-gray-50 flex items-center">
        <div
          className="bg-cover bg-center py-16 pt-20 w-full h-full "
          style={{
            backgroundImage: `url(${Mainimg.src})`,
          }}
        >
          <div className=" mx-16 text-left text-white">
            <div className="flex items-center">
              <div className="lg:w-1/2 w-full">
                <h1
                  className={`lg:text-5xl sm:text-3xl sm:mx-auto font-medium text-3xl mb-6 lg:ml-2 ${bounce}`}
                >
                  Explore our properties and find yours
                </h1>
                <p className="text-xl sm:text-xl sm:w-full  mb-12 lg:ml-2 ">
                  Search your dream home in Nepal’s Largest Property Market .
                  you can easily search, compare, and find your perfect property
                  in just a few clicks.
                </p>
                {/* <div className="lg:m-2">
                  <a
                    href="#"
                    className="bg-orange-500 text-white py-3 px-8 rounded-full hover:bg-orange-600 text-2xl  "
                  >
                    Explore
                  </a>
                </div> */}
              </div>
              <div className="w-1/2 pl-16 hidden sm:flex ">
                <img
                  src="../../images/subimg.png"
                  className="h-64 w-full object-cover rounded-xl"
                  alt="Layout Image"
                />
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <Droption />
          </div>
          {/* <div className="flex justify-center mt-20 gap-16 flex-wrap ">
            <div>
              <Selector />
            </div>
            <div>
              <Selector />
            </div>
            <div>
              <Selector />
            </div>
            <div>
              <SearchBar />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
