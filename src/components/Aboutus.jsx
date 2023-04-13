import Link from "next/link";
import React from "react";

const Aboutus = () => {
  return (
    <>
    <div>
      <img src="images/Banner-1.png"/>
    </div>
     <div className="flex">
        <div className="flex-1 w-50 mx-10 my-10 mt-10 mb-10">
          <div className="p-20 content-column col-lg-6 col-md-12 col-sm-12 order-2">
            <div className="sec-title text-center text-2xl">
              <span className="title"><u>Our Story</u></span>
              <h2><p>We are Creative Tech Enthusiast working since 2015!</p></h2>
            </div>
            <div className="sec-title text-center leading-relaxed">
              
              <p className="mb-3 text-black-600 dark:text-black-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-black dark:first-letter:text-black first-letter:mr-3 first-letter:float-left"> Welcome to Meerako Properties, where we believe that every client is unique and deserves a personalized experience when buying, selling, or renting a property. Our team of real estate experts is passionate about providing exceptional services to our clients and making sure that their needs are met. We are a leading real estate agency that has been in the business for over a decade, providing top-notch services to our clients in the United States.
              </p>
              <p className="text-black-600 dark:text-black-400">              
              <span>
              At Meerako Properties, we are committed to providing our clients with quality services that are transparent and reliable. Our team of experienced and knowledgeable professionals is always ready to assist you in finding the perfect property to buy, sell, or rent. We take the time to understand our client's needs, preferences, and budgets, and use our expertise to provide them with customized solutions.
              </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 w-50 mx-10 my-10 mt-10 mb-10">
          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column wow fadeInLeft">
              <figure className="image-1">
                <Link
                  href="#"
                  className="lightbox-image"
                  data-fancybox="images"
                >
                  <img
                    title="Building"
                    src="images/building.png"
                    className="rounded-full"
                    alt
                  />
                </Link>
              </figure>
              <div className="author-desc text-center">
                <h2>Manish Yadav</h2>
                <h2>CEO/Founder</h2>
              </div>
            </div>
          </div>
        </div>
        
    </div>
    </>
  );
};

export default Aboutus;
