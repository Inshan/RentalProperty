import React from "react";

const SignUpForm = () => {
  return (
    <form className="py-4">
      <div className="mx-4 text-sm ">
        <div className="pb-1">
          <label>Full Name</label>
        </div>

        <div className=" flex justify-between px-4 items-center h-10 w-full border-2 border-solid border-gray-200 rounded-md bg-white shadow-sm">
          <input
            className=" h-6 focus:ring-0  appearance-none  border-none w-auto py-2 px-3 text-gray-700 leading-tight  outline-none"
            type="text"
            placeholder="Your Name"
          />
        </div>
      </div>
      <div className="mx-4 text-sm ">
        <div className="pb-1 pt-2">
          <label>Email address</label>
        </div>

        <div className=" flex justify-between px-4 items-center h-10 w-full border-2 border-solid border-gray-200 rounded-md bg-white shadow-sm">
          <input
            className=" h-6 focus:ring-0  appearance-none  border-none w-auto py-2 px-3 text-gray-700 leading-tight  outline-none"
            type="text"
            placeholder="example@gmail.com"
          />
        </div>
      </div>

      <div className="mx-4 text-sm ">
        <div className="pb-1 pt-2">
          <label>Mobile Number</label>
        </div>

        <div className=" flex justify-between px-4 items-center h-10 w-full border-2 border-solid border-gray-200 rounded-md bg-white shadow-sm">
          <input
            className=" h-6 focus:ring-0  appearance-none  border-none w-auto py-2 px-3 text-gray-700 leading-tight  outline-none"
            type="text"
            placeholder="Your Phone Number"
          />
        </div>
      </div>

      <div className="mx-4">
        <div className="pt-2 pb-1">
          <label className="text-sm">Password</label>
        </div>

        <div className=" flex justify-between px-4 items-center h-10 w-full border-2 border-solid border-gray-200 rounded-md bg-white shadow-sm">
          <input
            className=" h-8 focus:ring-0  appearance-none  border-none w-auto py-2 px-3 text-gray-700 leading-tight  outline-none"
            type="password"
            placeholder="password"
          />
        </div>
      </div>

      <button
        id="forget-pass"
        aria-label="forget-password"
        className="text-blue-700 ml-4 py-4 text-sm "
      >
        forgetpassword?
      </button>
      <div className="bg-blue-600 min-w-min  rounded-lg text-sm text-center  ">
        <button
          id="submit-btn"
          aria-label="Sub-Btn"
          className="text-white  h-10  "
        >
          submit
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
