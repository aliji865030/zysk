import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoReorderThreeOutline } from "react-icons/io5";

const Nav = () => {
  return (
    <div className="nav flex justify-around items-center">
      <div className="flex justify-center items-center gap-10">
        <div className="">
          <img src="Logo.png" className="w-[130px]" alt="logo" />
        </div>
        <div>
          <ul className=" hidden md:flex justify-center items-center gap-10">
            <li>Home</li>
            <li className="flex justify-center items-center gap-2">
              Products <IoIosArrowDown />
            </li>
            <li className="flex justify-center items-center gap-2">
              Resources <IoIosArrowDown />
            </li>
            <li>Pricing</li>
          </ul>
        </div>
      </div>
      <div className=" hidden md:flex">
        <img src="userLogo.png" className="w-8" alt="" />
      </div>
      <div className="md:hidden text-[28px]">
      <IoReorderThreeOutline />
      </div>
    </div>
  );
};

export default Nav;
