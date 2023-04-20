import React from "react";
import Layout from "./Layout";
import Featured from "@/components/Featured";
import PropertyBg from "../../public/images/property_bg.png";
//import Featured from "@/components/Featured";
//import Contact from "@/components/Contact";
import Trendingprop, {
  Trendingprop1,
  Trendingprop2,
} from "@/components/Trendingprop";
// import RentOrBuy, {
//   RentOrBuy1,
//   RentOrBuy2,
//   RentOrBuy3,
// } from "@/components/RentOrBuy";
//import Recomended from "@/components/Recomended";

const property = () => {
  return (
    <Layout>
      <div className="bg-teal-50 text-black drop-shadow-sm  ">
        {/* Section: Design Block */}
        <section className=" text-gray-800 text-center lg:text-left background-radial-gradient  ">
          <div
            className="relative overflow-hidden bg-no-repeat bg-cover"
            style={{
              backgroundPosition: "50%",
              backgroundImage: `url(${PropertyBg.src})`,
              height: 500,
            }}
          >
            <div
              className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
            >
              <div className="flex justify-center items-center h-full">
                <div className="text-center text-white px-6 py-6 md:py-0 md:px-12 max-w-[800px]">
                  <h2 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-tight mb-12">
                    Discover Your Dream <br />
                    <span> Home</span>
                  </h2>
                  <p className="text-lg">
                    Unlock the Door to Your Perfect Rental with Us by Finding
                    the Key to Your Ideal Home Today!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*filter block*/}

        <div>
          <div className="flex flex-wrap mx-48 py-20 justify-around  border-b-2 border-solid border-gray-400  ">
            <div className="flex gap-4 items-center ">
              <h1 className="text-xl font-semibold">Filter By Category :</h1>

              <div className="relative " data-te-dropdown-ref>
                <button
                  className="flex items-center whitespace-nowrap rounded bg-orange-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-orange-400 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-orange-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-orange-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none"
                  type="button"
                  id="dropdownMenuButton1"
                  data-te-dropdown-toggle-ref
                  aria-expanded="false"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Category
                  <span className="ml-2 w-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
                <ul
                  className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-white [&[data-te-dropdown-show]]:block"
                  aria-labelledby="dropdownMenuButton1"
                  data-te-dropdown-menu-ref
                >
                  <li>
                    <a
                      className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-black dark:hover:bg-white"
                      href="#"
                      data-te-dropdown-item-ref
                    >
                      BUY
                    </a>
                  </li>
                  <li>
                    <a
                      className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-black dark:hover:bg-white"
                      href="#"
                      data-te-dropdown-item-ref
                    >
                      RENT
                    </a>
                  </li>
                  <li>
                    <a
                      className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-black dark:hover:bg-white"
                      href="#"
                      data-te-dropdown-item-ref
                    >
                      SEE All
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex gap-4 items-center ">
              <h1 className="font-bold text-xl "> Select Type : </h1>
              <div className="relative " data-te-dropdown-ref>
                <button
                  className="flex items-center whitespace-nowrap rounded bg-orange-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-orange-400 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-orange-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-orange-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none"
                  type="button"
                  id="dropdownMenuButton1"
                  data-te-dropdown-toggle-ref
                  aria-expanded="false"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Type
                  <span className="ml-2 w-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
                <ul
                  className="absolute z-[1000] float-left m-0 hidden uppercase min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-white [&[data-te-dropdown-show]]:block"
                  aria-labelledby="dropdownMenuButton1"
                  data-te-dropdown-menu-ref
                >
                  <li>
                    <a
                      className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
                      href="#"
                      data-te-dropdown-item-ref
                    >
                      Flat
                    </a>
                  </li>
                  <li>
                    <a
                      className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
                      href="#"
                      data-te-dropdown-item-ref
                    >
                      House
                    </a>
                  </li>
                  <li>
                    <a
                      className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white"
                      href="#"
                      data-te-dropdown-item-ref
                    >
                      Apartment
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* for large Screen */}
        <div className="bg-teal-50 pb-10 ">
          <h1 className=" text-2xl lg:text-3xl  text-black font-bold uppercase text-center pb-8 pt-12">
            All Properties
          </h1>

          <div className="flex flex-wrap items-center justify-evenly bg-teal-50 gap-8 px-4 py-0 md:px-10 lg:px-14">
            <Featured />
          </div>
        </div>

        {/* large screen ended */}

        {/* for mobile Screen */}

        <div className="gap-1 grid lg:hidden xl:hidden place-items-center  mx-auto ml py-8">
          <section>
            <div className="flex gap-8 flex-wrap justify-center items-center py-8 ">
              <div>
                <h1 className=" text-xl font-semibold">Filter By Category:</h1>
              </div>
              <div className="relative " data-te-dropdown-ref>
                <button
                  className="flex items-center whitespace-nowrap rounded bg-orange-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none"
                  type="button"
                  id="dropdownMenuButton1"
                  data-te-dropdown-toggle-ref
                  aria-expanded="false"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Category
                  <span className="ml-2 w-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
                <ul
                  className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-white [&[data-te-dropdown-show]]:block"
                  aria-labelledby="dropdownMenuButton1"
                  data-te-dropdown-menu-ref
                >
                  <li>
                    <a
                      className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                      href="#"
                      data-te-dropdown-item-ref
                    >
                      BUY
                    </a>
                  </li>
                  <li>
                    <a
                      className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                      href="#"
                      data-te-dropdown-item-ref
                    >
                      RENT
                    </a>
                  </li>
                  <li>
                    <a
                      className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                      href="#"
                      data-te-dropdown-item-ref
                    >
                      SEE All
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <div>
            <h1 className="text-xl font-bold text-center">All Properties</h1>
          </div>
          <section className=" hidden  lg:flex flex-wrap lg:gap-14 items-center justify-between lg:px-4    ">
            <Featured />
          </section>
        </div>
      </div>

      {/* for mobile screen ended */}

      <div className=" pl-8  bg-green-50 mx-0  pb-16 ">
        <h1 className=" text-2xl font-bold uppercase text-center py-8 pr-6 ">
          Flat
        </h1>
        <div>
          <div className="hidden lg:flex px-10 ">
            <Trendingprop />
          </div>
          <div className="hidden sm:flex  lg:hidden ">
            <Trendingprop1 />
          </div>
          <div className=" flex sm:hidden  lg:hidden w-full">
            <Trendingprop2 />
          </div>
        </div>
      </div>

      <div className=" pl-8  bg-green-50 mx-0  pb-16 ">
        <h1 className=" text-2xl font-bold uppercase text-center pb-8 pr-6 ">
          House
        </h1>
        <div>
          <div className="hidden lg:flex px-10 ">
            <Trendingprop />
          </div>
          <div className="hidden sm:flex  lg:hidden ">
            <Trendingprop1 />
          </div>
          <div className=" flex sm:hidden  lg:hidden w-full">
            <Trendingprop2 />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default property;
