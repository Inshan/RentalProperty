import React from "react";

const Tabutton = ({ children, isActive, onClick }) => {
  if (isActive) return <b>{children}</b>;
  return <button onClick={() => onClick()}>{children}</button>;
};

export default Tabutton;
