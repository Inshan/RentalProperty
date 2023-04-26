import React, { useState, useRef } from "react";
import ClickOutSide from "../Hook/ClickOutSide";

import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
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

const Dropchild = ({ name, options }) => {
  const [isOPen, setIsOpen] = useState(false);
  const [val, setVal] = useState(name);

  const ref = useRef();

  ClickOutSide(ref, () => setIsOpen(false));

  return (
    <div className="relative flex flex-col items-center w-[200px] h-10 rounded-lg py-2 px-4  ">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-blue-400 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white px-4 py-1"
      >
        {val}

        {!isOPen ? (
          <AiOutlineCaretDown className="h-8" />
        ) : (
          <AiOutlineCaretUp className="h-8" />
        )}
      </button>

      <div>
        {isOPen ? (
          <div
            ref={ref}
            className="mt-6 p-4 bg-slate-200 drop-shadow-sm rounded-md overflow-auto transition-all delay-700 duration-1000   initial={{ opacity: 0 }}
        "
          >
            <ul onClick={() => setIsOpen(false)}>
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
