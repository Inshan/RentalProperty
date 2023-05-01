import React, { useState, useEffect, useRef } from "react";

import ClickOutSide from "../Hook/ClickOutSide";
//import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaGoodreadsG } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import Tabutton from "./Tabutton";
import LogInForm from "./forms/LogInForm";
import SignUpForm from "./forms/SignUpForm";
// Hook
// function useOnClickOutside(ref, handler) {
//   useEffect(
//     () => {
//       //console.log("Inside Component");
//      // console.log("Refs", ref);
//       const listener = (event) => {
//         //console.log("Listening", ref, "event", event.target);
//         // Do nothing if clicking ref's element or descendent elements
//         if (!ref.current || ref.current.contains(event.target)) {
//           //console.log("Passsssssss");
//           return;
//         }
//         handler(event);
//       };
//       document.addEventListener("mousedown", listener);
//       document.addEventListener("touchstart", listener);
//       return () => {
//         document.removeEventListener("mousedown", listener);
//         document.removeEventListener("touchstart", listener);
//       };
//     },
//     // Add ref and handler to effect dependencies
//     // It's worth noting that because passed in handler is a new ...
//     // ... function on every render that will cause this effect ...
//     // ... callback/cleanup to run every render. It's not a big deal ...
//     // ... but to optimize you can wrap handler in useCallback before ...
//     // ... passing it into this hook.
//     [ref, handler]
//   );
// }

const Modal = ({ isVisible, onClose }) => {
  const [tab, setTab] = useState("login");

  const ref = useRef();
  ClickOutSide(ref, () => onClose());
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm bg-black min-h-screen flex items-center justify-center z-50">
      <div
        className=" bg-white lg:w-auto md:w-auto sm:w-auto lg:px-4 sm:px-4 md:px-4 mx-8 px-2 py-2 rounded-sm pt-4 min-w-min  "
        ref={ref}
      >
        <div className=" flex  justify-between px-0  min-w-min sm:w-96  border-b-2 border-solid border-gray-300 ">
          <button id="log-btn" aria-label="logIn" className="font-bold">
            login
          </button>
          <button
            id="cancel "
            aria-label="Cancel-btn"
            onClick={() => onClose()}
          >
            <ImCancelCircle className="text-xl text-red-700" />
          </button>
        </div>

        <div className="grid place-items-center py-4 gap-2 border-b-2 border-solid border-gray-300 text-xs ">
          <button
            id="fbBtn"
            aria-label="facebookbtn"
            className=" flex items-center  h-10 font-bold  uppercase  px-2 text-white min-w-fit border bg-blue-700 rounded-lg"
          >
            <FaFacebookF className="mx-2  text-lg  font-bold px-1 border-r border-solid border-white" />{" "}
            <span>continue with facebook</span>
          </button>
          <button
            id="google-btn"
            aria-label="goggle_btn"
            className=" flex items-center  h-10  font-bold uppercase px-4 text-white min-w-min bg-red-600 border rounded-lg"
          >
            <FaGoodreadsG className="mr-4 px-1 font-semibold border-r border-solid border-white text-lg " />{" "}
            <span>continue with google</span>
          </button>
        </div>

        <div className="flex items-center pl-4  pb-1 pt-2 gap-16 mx-4  border-b-2 border-solid border-gray-300 text-sm ">
          <Tabutton
            isactive={tab === "login"}
            onClick={() => setTab("login")}
            className=" hover:text-blue-600"
          >
            {tab === `login` ? (
              <h1 style={{ color: "blue", textDecoration: "underline" }}>
                Login
              </h1>
            ) : (
              <h1>Login</h1>
            )}
          </Tabutton>

          <Tabutton
            isactive={tab === "signup"}
            onClick={() => setTab("signup")}
            className="  hover:text-blue-600"
          >
            {tab === `signup` ? (
              <h1 style={{ color: "blue", textDecoration: "underline" }}>
                Signup
              </h1>
            ) : (
              <h1>Signup</h1>
            )}
          </Tabutton>
        </div>

        {tab === "login" && <LogInForm />}

        {tab === "signup" && <SignUpForm />}
      </div>
    </div>
  );
};

export default Modal;
