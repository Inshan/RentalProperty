import Slide from "./Slide";
import React, { useRef, useState } from "react";

const Property = () => {
    const [location, setLocation] = useState(1);
  return (
    <>
    <div className="opacity-75">
        <img src="images/Banner-1.png"/>
    </div>

    <div className="grid grid-rows-3 grid-cols-3">
    <div className="row-span-2">

    <Slide/>

      <div className="font-extrabold text-xl bg-gray border text-black">
    <div className="grid grid-col-2">
      <div className="">
        <img src="images/bed.png"/>
        BEDROOMS: 2
      </div>
      <div className="">
        <img src="images/long-sofa.png" />
        LIVING ROOMS: 2
      </div>
      <div className="">
        <img src="images/counter.png" />
        KITCHEN: 1
      </div>
      <div className="">
        <img src="images/toilet.png" />
        WASHROOM: 1
      </div>
      <div className="col-span-2">
        <img src="images/armchair.png" />
        FURNISHED: FULL
      </div>
    </div>
    </div>
      </div>
      {/* <div className="col-span-1"></div> */}

      {/* -------------------------------------------------------- */}
      <div className="text-black text-xl">

      <h1>3 Bedroom Apartment for Rent</h1>

            <button className="pl-1">Description</button>
            <button className="pl-5" onClick={()=> {setLocation(!location);}}>Location</button>     
      {/* --------------------------------------------------------------*/}
        <p className="text-lg">
            A luxury house located in the capital. Near to BIG Mart, BHAT-BHATENI, and plethora of government offices!
        </p>
        
    
    {location ? (
    console.log("this is inside location"),
      <>
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2509.5362378272134!2d85.3651821374074!3d27.72072458254899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b34ce93930f%3A0xfcd192546dfe646!2sMeerako%20Services!5e0!3m2!1sen!2snp!4v1681104017846!5m2!1sen!2snp" width={633} height={311} style={{border: 0}} />
      </div>
</>
):(
  ""
)}
      {/* </div> */}
    </div>
    </div>
    </>
  )
}

export default Property