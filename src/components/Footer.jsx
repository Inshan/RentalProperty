import React from "react";
import Link from "next/link";
import { TwitterIcon, LinkedinIcon, Pintrest, FaceBook } from "./Icons";

const Footer = () => {
  return (
    <div>
      <div>
        {/* component */}

        <footer className=" bg-blueGray-200 pt-8 pb-6 bg-sky-950  ">
          <div className="container mx-0 sm:mx-8 lg:mx-10 px-4">
            <div className="flex flex-wrap text-left lg:text-left">
              <div className="w-full lg:w-6/12 px-4">
                <h4 className="text-3xl fonat-semibold text-white">
                  Let's keep in touch!
                </h4>
                <h5 className="text-lg mt-0 mb-2 text-white">
                  Find us on any of these platforms, we respond 1-2 business
                  days.
                </h5>
                <div className="mt-6 lg:mb-0 mb-6 flex items-center justify-left  ">
                  <button
                    id="twitter-icon"
                    aria-label="twitter_Icon"
                    className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2  hover:scale-105 hover:transition-all "
                    type="button"
                  >
                    <TwitterIcon />
                  </button>
                  <button
                    id="linkedIn"
                    className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2  hover:scale-105 hover:transition-all "
                    type="button"
                  >
                    <LinkedinIcon className=" hover:scale-105 hover:transition-all" />
                  </button>
                  <button
                    id="facebook"
                    aria-label="btnfb"
                    className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2  hover:scale-105 hover:transition-all "
                  >
                    <FaceBook />
                  </button>
                  <button
                    id="pintrest"
                    aria-label="btn_pintrest"
                    className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2  hover:scale-105 hover:transition-all "
                  >
                    <Pintrest />
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="flex flex-wrap items-top mb-6">
                  <div className="w-full lg:w-4/12 px-4 ml-auto">
                    <span className="block uppercase text-white text-sm font-semibold mb-2">
                      Useful Links
                    </span>
                    <ul className="list-unstyled">
                      <li>
                        <Link
                          className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                          href="/about"
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                          href="/blog"
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                          href="/about"
                        >
                          Facebook
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                          href="#"
                        >
                          Free Products
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <span className="block uppercase text-white text-sm font-semibold mb-2">
                      Other Resources
                    </span>
                    <ul className="list-unstyled">
                      <li>
                        <Link
                          className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                          href="/about"
                        >
                          MIT License
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                          href="/blog"
                        >
                          Terms &amp; Conditions
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                          href="#"
                        >
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                          href="/contact"
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-6 border-blueGray-300" />
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                <div className="text-sm text-white font-semibold py-1">
                  Copyright © <span id="get-current-year">2021</span>
                  <Link
                    href="#"
                    className="text-white hover:text-gray-800"
                    target="_blank"
                  >
                    {" "}
                    Meerako Services
                  </Link>
                  <Link href="#" className="text-white hover:text-blueGray-800">
                    Meerako Team
                  </Link>
                  .
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
