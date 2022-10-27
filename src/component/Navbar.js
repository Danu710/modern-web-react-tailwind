import React, { useState } from "react";
import logo from "../img/logo.svg";
import { navLinks } from "../assets";
import close from "../img/close.svg";
import menu from "../img/menu.svg";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-5  justify-between items-center navbar ">
      <img src={logo} alt="Logo" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((link, index) => (
          <li
            key={link.name}
            className={`font-poppins font-normal cursor-pointer text-[15px] 
          ${
            active === link.name
              ? "border-solid border-2 border-btn rounded-md hover:bg-btn active:bg-btn focus:bg-btn text-black "
              : "text-black"
          }
          ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(link.name)}>
            <a href={`${link.link}`}>{link.name}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-col justify-end items-center">
        <img
          src={toggle ? menu : close}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${toggle ? "hidden" : "flex"}
          p-6 bg-black-gradient  top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((link, index) => (
              <li
                key={link.name}
                className={`font-poppins font-normal cursor-pointer text-[15px] 
                ${active === link.name ? "text-black" : "text-dimWhite"}
                ${index === navLinks.length - 1 ? "mr-0" : "mb-4"}`}
                onClick={() => setActive(link.name)}>
                <a href={`${link.link}`}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
