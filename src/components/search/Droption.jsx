import React, { useState, useRef } from "react";
import Dropchild from "./Dropchild";
import ClickOutSide from "../Hook/ClickOutSide";

import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const area = {
  id: 1,
  name: "Area",
  area1: ["Bouddha", "Basundhara", "Koteshwor"],
};

const price = {
  id: 2,
  name: "Price",
  price1: ["1000", "2000", "3000"],
};

const location = {
  id: 3,
  name: "Location",
  location1: ["kathmandu", "Pokhara", "Biratnagar"],
};

const status = {
  id: 4,
  name: "Status",
  status1: ["Flat", "Apartment", "House"],
};

const Droption = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  ClickOutSide(ref, () => setIsOpen(false));

  return (
    <div>
      {/* code for Search bar */}
      <div className="border-1 border-solid gap-4 h-28 flex items-center lg:pl-[75px]  ">
        <div className=" flex justify-between px-4 items-center h-12 w-1/3 border-2 border-solid border-gray-200 rounded-md bg-white shadow-sm">
          <input
            className=" h-8  bg-yellow-100 focus:ring-0  appearance-none  border-none w-auto py-2 px-3 text-gray-700 leading-tight  outline-none"
            id="id"
            type="text"
            placeholder="Search"
          />
          <button
            id="Search"
            aria-label="Search_btn"
            type="submit"
            className=" h-8 border-1 border-solid border-black bg-green-400 px-4 py2 rounded-sm"
          >
            Search
          </button>
        </div>

        <div>
          {isOpen ? (
            <>
              <div ref={ref} className="flex gap-6 lg:items-center flex-wrap">
                <Dropchild
                  name={area.name}
                  options={area.area1}
                  holder={"Select Area"}
                />
                <Dropchild
                  name={price.name}
                  options={price.price1}
                  holder={"Select Price"}
                />
                <Dropchild
                  name={location.name}
                  options={location.location1}
                  holder={"Select Location"}
                />
                <Dropchild
                  name={status.name}
                  options={status.status1}
                  holder={"Select Status"}
                />
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className="flex lg:ml-[75px]  py-8 mt-0">
        <button
          id="Hide_btn"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Hide_button"
          className=" py-1 flex items-center "
        >
          {isOpen ? (
            <>
              <h1 className="text-white"> Hide Option</h1>
              <RiArrowDropUpLine className="text-xl mt-1  text-white " />
            </>
          ) : (
            <>
              <h1 className="text-white"> More Option</h1>

              <RiArrowDropDownLine className="text-xl mt-1 text-white " />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Droption;
