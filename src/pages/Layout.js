import React, { useState } from "react";
import Nav1 from "@/components/Navbar";
//import Navbar from "@/components/NavMenu";
import Footer from "@/components/Footer";
import Modal from "@/components/modal/Modal";

const Layout = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Nav1 showmodal={setShowModal} />
      <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
