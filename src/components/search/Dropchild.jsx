import React, { useState, useRef } from "react";
import ClickOutSide from "../Hook/ClickOutSide";

import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { Input } from "postcss";
//import { motion } from "framer-motion";

// function useOnClickOutside(ref, handler) {
//   useEffect(
//     () => {
//       //console.log("Inside Component");
//       // console.log("Refs", ref);
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

const Dropchild = ({ name, options, holder, id }) => {
  const [isOPen, setIsOpen] = useState(false);
  const [val, setVal] = useState("");

  const ref = useRef();

  ClickOutSide(ref, () => setIsOpen(false));

  return (
    <div className="relative flex flex-col items-center w-44 h-10 rounded-sm py-2     ">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center bg-white w-auto rounded-sm px-1 z-0 "
      >
        <input
          id="drop"
          aria-label="drop-btn"
          defaultValue={""}
          value={val}
          placeholder={holder}
          className="bg-yellow-50 z-0 w-full flex items-center justify-between font-bold text-sm rounded-sm tracking-wider px-4 py-1 focus:ring-0  focus:border-none appearance-none border-none outline-none active:ring-0  active:border-none  "
        />

        {!isOPen ? (
          <AiOutlineCaretDown className="h-8 opacity-50 cursor-pointer  " />
        ) : (
          <AiOutlineCaretUp className="h-8 opacity-50 cursor-pointer " />
        )}
      </div>

      <div>
        {isOPen ? (
          <div
            ref={ref}
            className="mt-6 p-4 bg-slate-200 drop-shadow-sm rounded-md overflow-auto transition-all delay-700 duration-1000   initial={{ opacity: 0 }}
        "
          >
            <ul onClick={() => setIsOpen(false)} className="z-50">
              {options.map((option) => (
                <li
                  key={id}
                  onClick={() => setVal(option)}
                  className="cursor-pointer hover:bg-black hover:text-white px-2 py-0.5"
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Dropchild;
