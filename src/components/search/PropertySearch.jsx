import React from "react";
import Dropchild from "./Dropchild";

const cat = {
  id: 5,
  name: "Category",
  category: ["Buy", "Rent", "See  All"],
};
const typ = {
  id: 6,
  name: "Type",
  type: ["Flat", "Apartment", "House"],
};

const PropertySearch = () => {
  return (
    <>
      <div className="grid place-items-center gap-8  sm:flex justify-around  py-8 mx-4 lg:mx-20 md:mx-16 sm:mx-12  sm:border-b sm:border-solid   border-gray-300 ">
        <div className="grid place-items-center sm:flex sm:items-center sm:justify-center gap-4 z-50">
          <h1>Select Category:</h1>
          <Dropchild
            id={cat.id}
            options={cat.category}
            holder={"Select Category"}
          />
        </div>

        <div className="grid place-items-center sm:flex sm:items-center sm:justify-center gap-4 py-8 ">
          <h1>Select Type :</h1>
          <Dropchild id={typ.id} options={typ.type} holder={"Select Type"} />
        </div>
      </div>
    </>
  );
};

export default PropertySearch;
