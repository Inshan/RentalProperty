import React from "react";
import Mainimg from "../../public/images/mainimg.png";
//import Subimg from "../../public/images/subimg.png";

const Hero = () => {
  // console.log(Mainimg);
  return (
    <>
      {/* component */}
      <div className="h-screen-min bg-gray-50 flex items-center">
        <section
          className="bg-cover bg-center py-32 w-full"
          style={{
            backgroundImage: `url(${Mainimg.src})`,
          }}
        >
          <div className="container mx-auto text-left text-white">
            <div className="flex items-center">
              <div className="w-2/3">
                <h1 className="text-5xl font-medium mb-6 ml-8">
                  Explore our properties and find yours
                </h1>
                <p className="text-xl mb-12 ml-6">
                  Search your dream home in Nepal’s Largest Property Market .
                   you
                  can easily search, compare, and find your perfect property in
                  just a few clicks.
                </p>
                <a
                  href="#"
                  className="bg-indigo-500 text-white py-4 px-10 rounded-full hover:bg-indigo-600 text-2xl "
                >
                  Explore
                </a>
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
        </section>
      </div>
    </>
  );
};

export default Hero;
