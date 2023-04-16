import Link from "next/link";
import React from "react";

const Services_try = () => {
  return (
    <>
      <div>
        <img src="images/Banner-1.png" />
        {/* <!-- component --> */}
       <div className="px-3 md:lg:xl:px-40   border-t border-b py-20 bg-opacity-10" style={{backgroundImage: 'url("https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png")'}}>
  <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white shadow-xl shadow-neutral-100 border ">
    <div className="flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
     <img src="images/buy.png" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"/>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        
      <p className="text-xl font-medium text-slate-700 mt-3">Buy Property</p>
      <p className="p-2 text-justify mt-2 text-lg text-slate-500"> At Meerako Properties, we offer a comprehensive range of real
                  estate services to help companies find and purchase their
                  ideal properties. Our experienced team can assist with every
                  step of the buying process, from identifying potential
                  properties to negotiating the best price and managing the
                  legal and financial aspects of the transaction.</p>
    </div>
    <div className="flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
    <img src="images/sell.png" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <p className="text-xl font-medium text-slate-700 mt-3">Sell Property</p>
      <p className="p-2 text-justify mt-2 text-lg text-slate-500">Our experienced team can provide you with a detailed analysis
                  of the local real estate market, help you determine the best
                  listing price, and market your property effectively to reach a
                  wide range of potential buyers. We also offer expert guidance
                  on negotiating offers, managing contracts, and ensuring that
                  all legal and financial aspects of the transaction are handled
                  correctly. </p>
    </div>
    <div className="flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
  <img src="images/rent.png" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"/>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
     
      <p className="text-xl font-medium text-slate-700 mt-3">Rent Property</p>
      <p className="p-2 text-justify mt-2 text-lg text-slate-500"> Our experienced team can provide you with a detailed analysis
                  of the local real estate market, help you determine the best
                  listing price, and market your property effectively to reach a
                  wide range of potential buyers. We also offer expert guidance
                  on negotiating offers, managing contracts, and ensuring that
                  all legal and financial aspects of the transaction are handled
                  correctly. </p>
    </div>
  
  </div>
  <div className="flex flex-wrap w-full bg-indigo-600 shadow-xl shadow-indigo-200 py-10 px-10 justify-between items-center text-sm">
    <p className=" text-white"> <span className="md:text-4xl font-medium flex flex-wrap text-xl"><div className="flex-1">Still Confused ?</div></span> <br /> <span className="text-lg">Book For Free Career Consultation Today ! </span></p>
    <button className="px-3 py-3  font-medium shadow-xl  hover:bg-white duration-150  bg-yellow-400">BOOK AN APPOINTMENT </button>
  </div>
</div>
        </div>
    </>
  );
};

export default Services_try;
