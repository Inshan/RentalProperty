import React from "react";
import Layout from "./Layout";
import Property from "@/components/Property";
import Carousel_demo from "@/components/carousel_demo";

const property = () => {
  return (
    <>
      <div>
        <Layout>
          <Property />
          <Carousel_demo />
        </Layout>
      </div>
    </>
  );
};

export default property;
