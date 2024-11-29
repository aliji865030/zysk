import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Nav = () => {
  return (
    <div className="nav flex justify-between items-center px-[9rem]">
      <div className="flex justify-center items-center gap-10">
        <div className="">
          <img src="Logo.png" className="w-[130px]" alt="logo" />
        </div>
        <div>
          <ul className="flex justify-center items-center gap-10">
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
      <div>
        <img src="userLogo.png" className="w-8" alt="" />
      </div>
    </div>
  );
};

export default Nav;
