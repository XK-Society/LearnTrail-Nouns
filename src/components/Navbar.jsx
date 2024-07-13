import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#FBF6E2]">
      <h1 className="w-full text-3xl font-bold text-[#ECCEAE]">
        <Link to="/">Learn Trail</Link>
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4">
          <Link to="/coursepage">Course</Link>
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#131842] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#ECCEAE] m-4">
          <Link to="/">Learn Trail</Link>
        </h1>
        <li className="p-4 border-b border-gray-600">
          <Link to="/coursepage">Coursepage</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
