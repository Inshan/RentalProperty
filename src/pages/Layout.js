import React from "react";
import Nav1 from "@/components/Navbar";
//import Navbar from "@/components/NavMenu";
import Footer from "@/components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Nav1 />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
