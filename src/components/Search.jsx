import React, { useState } from "react";
import { Area, Price } from "./DropDown";
import Category from "./DropDown";
import { Users } from "./data/SearchData";

const Search = () => {
  const [query, setQuery] = useState("");
  return (
    <>
      <div className="w-1/2  -translate-y-1/2  bg-gray-100    mx-auto center h-auto border-2  border-none rounded-t p-8  ">
        <div className="flex items-center justify-around ">
          <div>
            <button
              data-tooltip-target="tooltip-animation"
              type="button"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-12 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              BUY
            </button>
            <div
              id="tooltip-animation"
              role="tooltip"
              className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
            >
              CLick To Buy
              <div className="tooltip-arrow" data-popper-arrow />
            </div>
          </div>

          <div>
            <button
              data-tooltip-target="tooltip-animation"
              type="button"
              className="text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-12 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              RENT
            </button>
            <div
              id="tooltip-animation"
              role="tooltip"
              className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
            >
              Click To Rent
              <div className="tooltip-arrow" data-popper-arrow />
            </div>
          </div>

          <div>
            <button
              data-tooltip-target="tooltip-animation"
              type="button"
              className="text-white bg-amber-600 hover:bg-orange-800  focus:outline-none font-medium rounded-lg text-sm px-12 py-3 text-center"
            >
              SELL
            </button>
            <div
              id="tooltip-animation"
              role="tooltip"
              className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
            >
              Click to Sell
              <div className="tooltip-arrow" data-popper-arrow />
            </div>
          </div>
        </div>

        <div className="pt-10">
          <div className="flex justify-center w-auto ">
            <div className="mb-3 w-auto">
              <div className="  flex w-full flex-wrap items-stretch border border-solid border-1  ">
                <input
                  onChange={(e) => setQuery(e.target.value.toLowerCase())}
                  type="search"
                  className="m-0 -mr-px block w-50 min-w-0 flex-auto rounded-l  border-1 border-solid border-black bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                  placeholder="Search by location"
                  aria-label="Search"
                  aria-describedby="button-addon1"
                />

                <div className="flex flex-wrap py-1 gap-4">
                  <Category />
                  <Area />
                  <Price />
                </div>

                <button
                  className=" flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-blue-300 shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                  type="button"
                  id="button-addon1"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* <div className="ml-24 ">
            <ul className="list">
              {Users.filter((asd) =>
                asd.plocation.toLowerCase().includes(query)
              ).map((user) => (
                <li className="listItem " key={user.id}>
                  {user.plocation}
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Search;
