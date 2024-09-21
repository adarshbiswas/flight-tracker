import React from "react";
import { HiMenu } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="navbar absolute z-10 w-full h-[50px] px-14 pt-8">
      <div className="nav_items h-full w-full flex items-center justify-between ">
        <div className="left_item cursor-pointer  ">
          <h1 className="heading text-3xl  font-medium px-4 py-1 text-black">
            Flight Tracker
          </h1>
        </div>
        <div className="right_item flex items-center gap-8">
        <ul className="flex items-center gap-4 text-md font-medium cursor-pointer">
          <li>About</li>
          <li>Pricing</li>
          <li>Community</li>
        </ul>
          <button className="text-md font-medium bg-black/80 text-white/70 px-4 py-2 rounded-md duration-300 hover:scale-105">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
