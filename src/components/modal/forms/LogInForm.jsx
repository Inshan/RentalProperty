import React, { useState } from "react";

const LogInForm = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValue((prevState) => ({ ...prevState, [name]: value }));

    console.log("value typed is:", value);
  };

  return (
    <form className="py-4">
      <div className="mx-4 text-sm ">
        <div className="pb-2">
          <label>Email address</label>
        </div>

        <div className=" flex justify-between px-4 items-center h-12 w-full border-2 border-solid border-gray-200 rounded-md bg-white shadow-sm">
          <input
            className=" h-8 focus:ring-0  appearance-none  border-none w-auto py-2 px-3 text-gray-700 leading-tight  outline-none"
            type="email"
            placeholder="example@gmail.com"
            name="email"
            value={inputValue.email}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="mx-4">
        <div className="pt-4 pb-2">
          <label className="text-sm">Password</label>
        </div>

        <div className=" flex justify-between px-4 items-center h-12 w-full border-2 border-solid border-gray-200 rounded-md bg-white shadow-sm">
          <input
            className=" h-8 focus:ring-0  appearance-none  border-none w-auto py-2 px-3 text-gray-700 leading-tight  outline-none"
            type="password"
            placeholder="password"
            name="password"
            value={inputValue.password}
            onChange={handleChange}
          />
        </div>
      </div>

      <button
        id="form_btn"
        aria-label="form-Btn"
        className="text-blue-700 ml-4 py-4 text-sm "
      >
        forgetpassword?
      </button>
      <div className="bg-blue-600 min-w-min  rounded-lg text-sm text-center  ">
        <button
          id="form-btn"
          aria-label="submit-btn"
          className="text-white  h-10  "
        >
          submit
        </button>
      </div>
    </form>
  );
};

export default LogInForm;
