import React from "react";
import Pdata from "./data/Pdata";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const Featured = () => {
  const router = useRouter();
  const handleClick = (index) => {
    router.push({
      pathname: `/property/${Pdata.cardData[index].id}`,
      query: { type: "feature" },
    });
  };
  return (
    <>
      {Pdata.cardData.map((value, index) => (
        <div
          key={index}
          className="lg:w-64 md:w-80 w-11/12  bg-white border border-gray-200 rounded-lg shadow  gap-20 hover:scale-105 hover:transition-all "
          onClick={() => {
            handleClick(index);
          }}
        >
          <Link href={"#"}>
            <Image className="rounded-t-lg  " src={value.img} alt="allimg" />
          </Link>
          <div className="p-5">
            <Link href="#">
              <h5 className="mb-2 text-2xl md:text-xl lg:text-xl font-bold tracking-tight text-gray-900 ">
                {value.title}
              </h5>
            </Link>
            <p className="mb-3 text-sm md:text-xs lg:text-xs text-gray-700 ">
              {value.desc}
            </p>
            <Link
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-sm hover:bg-green-800 focus:ring-4 focus:outline-none "
            >
              Quote Now
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

export default Featured;
