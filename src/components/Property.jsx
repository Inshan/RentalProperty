import React,{useState, useTransition} from "react";
import Link from "next/link";
<script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-element-bundle.min.js"></script>;
import Image from 'next/image'

 {/* Item 2 */}
//  <div className="hidden duration-700 ease-in-out" id = '2'>
//  <img src="../../images/counter.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="second" />
// </div>
{/* Item 3 */}
{/* <div className="hidden duration-700 ease-in-out" id = '3'>
 <img src="../../images/toilet.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
</div> */}
{/* Item 4 */}
{/* <div className="hidden duration-700 ease-in-out" id = '4'>
 <img src="../../images/building.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
</div> */}
{/* Item 5 */}
{/* <div className="hidden duration-700 ease-in-out" id = '5'>
 <img src="../../images/building.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
</div> */}

const Property = () => {
  const dataList = [
    {
    "id":"0",
    "image":"/images/building.png",
    "text":""
    },
    {
      "id":"1",
      "image":"/images/building.png",
      "text":""
    },
    {
      "id":"2",
      "image":"/images/counter.png",
      "text":""
    },
    {
      "id":"3",
      "image":"/images/building.png",
      "text":""
    },
    {
      "id":"4",
      "image":"/images/building.png",
      "text":""
    }
  ]
  const [activeSlide, changeSlide]  = useState(dataList[0]);
  
  const [isPending, startTransition] = useTransition();

  console.log(activeSlide.image);

  const prev = () => {

    let id = activeSlide.id-1;
    if(id<0)id = 4;
    console.log(id);
    startTransition(()=>{changeSlide(dataList[id])});
  };

  const next = () => {
    // e.preventDefault();
    let id = Number(activeSlide.id)+1;
    if(id>4)id = 0;
    console.log(id);
    startTransition(()=>{changeSlide(dataList[id])});
    console.log("Next property");
  };

  return (
    <>
      <img src="img/Banner-1.png" />
      <div className="p-20 grid grid-cols-2">
        <div className="bg-gray-100 border border-gray-200 rounded-lg dark:border-gray-700 ">
        <div id="default-carousel" className="relative w-full" data-carousel="slide">
  {/* Carousel wrapper */}
  <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
    {/* Item 1 */}
    <div className="duration-700 ease-in-out" id = '1'>
      <Image src={activeSlide.image} height = "400" width = "600" className="delay-75 animate-change absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="first" />
    </div>
   
  </div>
  {/* Slider indicators */}
  <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
    <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to={0} />
    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to={1} />
    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to={2} />
    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to={3} />
    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to={4} />
  </div>
  {/* Slider controls */}
  <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev onClick ={(e)=>prev()}>
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
      <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      <span className="sr-only">Previous</span>
    </span>
  </button>
  <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next onClick ={(e)=>next()}>
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
      <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      <span className="sr-only">Next</span>
    </span>
  </button>
</div>


          {/* <a href="#">
            <img className="object-cover" src="images/Building.png" alt />
          </a> */}


          <div className="p-5">
            <a href="#">
              <h5 className="text-black mb-2 text-2xl font-bold tracking-tight"></h5>
            </a>
            <p className="mb-3 font-normal text-black"></p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
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
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="colspan-2 font-extrabold text-xl bg-gray border  text-black">
          <div className="grid grid-rows-">
            <h5 className="row-span-2">
              <img src="images/bed.png" />
              BEDROOMS: 2
            </h5>
            <p className="row-span-2">
              <img src="images/long-sofa.png" />
              LIVING ROOMS: 2
            </p>
            <p className="row-span-2">
              <img src="images/counter.png" />
              KITCHEN: 1
            </p>
            <p className="row-span-2">
              <img src="images/toilet.png" />
              WASHROOM: 1
            </p>
            <p className="col-span-2">
              <img src="images/armchair.png" />
              FURNISHED:FULL
            </p>
          </div>
          <div className="grid grid-cols-3">
            <p>
              <img src="images/building.png" className="p-1" />
            </p>
            <p>
              <img src="images/building.png" className="p-1" />
            </p>
            <p>
              <img src="images/building.png" className="p-1" />
            </p>
            <p>
              <img src="images/building.png" className="p-1" />
            </p>
            <p>
              <img src="images/building.png" className="p-1" />
            </p>
            <p>
              <img src="images/building.png" className="p-1" />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Property;
