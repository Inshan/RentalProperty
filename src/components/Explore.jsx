import React from "react";
import Exploreimg from "../../public/images/exploreimg.png";
import Link from "next/link";

const Explore = () => {
  // console.log(Exploreimg);
  return (
    <>
      <div className="bg-teal-100 bg-opacity-25 lg:flex lg:justify-center  ">
        <div className="bg-cyan-50   lg:ml-62 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg  lg:-translate-y-1/3">
          <div className="lg:w-1/2">
            <div
              className="h-64 bg-cover lg:rounded-lg lg:h-full"
              style={{
                backgroundImage: `url(${Exploreimg.src})`,
              }}
            />
          </div>
          <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
            <h2 className="text-3xl text-gray-800 font-bold">
              Looking for your dream
              <span className="text-indigo-600"> property</span>
            </h2>
            <p className="mt-4 text-gray-600">
              Look no further! Our website offers a wide range of properties to
              suit all your needs and preferences. Start your search now and
              discover the perfect property for you.
            </p>
            <div className="mt-8">
              <Link
                href="#"
                className="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded"
              >
                Start Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
