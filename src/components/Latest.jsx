import React from "react";
import Ldata from "../components/data/Ldata";
import Link from "next/link";
import Image from "next/image";

const Latest = () => {
  return (
    <>
      {Ldata.cardData.map((value, index) => (
        <div
          key={index}
          className=" w-72 bg-white border border-gray-200 rounded-lg shadow gap-8 hover:scale-105 hover:transition-all  "
        >
          <Link href="#">
            <Image
              src={value.img}
              className="rounded-t-lg  "
              alt="firstImage"
            />
          </Link>
          <div className="p-5">
            <Link href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {value.title}
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {value.desc}
            </p>
            <Link
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Buy Now
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Latest;
