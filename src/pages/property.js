import React from "react";
import Layout from "./Layout";
import Featured from "@/components/Featured";
import PropertyBg from "../../public/images/property_bg.png";
import Trendingprop from "@/components/Trendingprop";
import Recomended from "@/components/Recomended";

const property = () => {
  return (
    <Layout>
      <div>
        {/* Section: Design Block */}
        <section className=" text-gray-800 text-center lg:text-left background-radial-gradient">
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
        {/* Section: Design Block */}

        {/* for large Screen */}

        <div>
          <div className="hidden lg:flex h-screen  ">
            <aside className="w-1/4 border-r border-solid border-gray-300 px-10  bg-gray-50 ">
              <div className="flex gap-8 justify-center items-center py-8 px-10 ">
                <div>
                  <h1 className=" text-xl font-semibold">
                    Filter By Category:
                  </h1>
                </div>
                <div className="relative " data-te-dropdown-ref>
                  <button
                    className="flex items-center whitespace-nowrap rounded bg-blue-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none"
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
                    className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
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
            </aside>

            <div className="w-3/4 bg-teal-50 ">
              <div className="px-10 py-8 bg-gray-50 ">
                <h1 className="text-3xl font-bold text-center drop-shadow-sm   ">
                  All Properties
                </h1>
              </div>
              <section className="flex flex-wrap gap-8 items-center justify-center overflow-auto h-full pb-0 ">
                <div className="p-8 gap-8 flex flex-wrap items-center justify-center overflow-hidden ">
                  <Featured className="overflow-hidden" />
                </div>
              </section>
            </div>
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
                  className="flex items-center whitespace-nowrap rounded bg-blue-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none"
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
                  className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
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
          <section className="flex flex-wrap gap-4 items-center justify-center ">
            <Featured />
          </section>
        </div>
      </div>

      {/* for mobile screen ended */}

      <section className="bg-teal-50 mt-32">
        <div className="py-10">
          <h1 className=" text-center  text-3xl font-bold  ">
            Desirable Properties
          </h1>
        </div>
        <div className="flex items-center justify-center gap-8  ">
          <Recomended />
        </div>
      </section>
      <section className="bg-teal-50">
        <div className="pt-10">
          <h1 className=" text-center  text-3xl font-bold  ">
            Trending Properties In KTM
          </h1>
        </div>

        <div className="flex items-center justify-center mx-14 py-10 ">
          <Trendingprop />
        </div>
      </section>
    </Layout>
  );
};

export default property;
