import React from "react";

const Tabutton = ({ children, isActive, onClick }) => {
  if (isActive) return <b>{children}</b>;
  return (
    <button id="tab-btn" aria-label="tab-buton" onClick={() => onClick()}>
      {children}
    </button>
  );
};

export default Tabutton;
