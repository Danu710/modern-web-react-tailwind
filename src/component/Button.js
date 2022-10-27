import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`mt-3 w-[120px] h-[50px] font-poppins font-medium text-[18px] text-white bg-btn rounded-[10px] outline-none ${styles}`}>
      Get Started
    </button>
  );
};

export default Button;
