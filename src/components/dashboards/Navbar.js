import React from "react";
import { Searchbar } from "../../assets/Svgs";
import CustomDdown from "./CustomDdown";
import { ReactComponent as Notification } from "../../assets/notification.svg";
import { ReactComponent as NavPerson } from "../../assets/NavPerson.svg";
import { ReactComponent as DropDownIcon } from "../../assets/SelectDropDown.svg"

const Navbar = ({setCollapsed,isCollapsed}) => {

  const toggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <nav className="bg-[#191A1E] px-6 h-[110px] flex justify-center items-center">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex justify-center items-center w-72 h-[55px] rounded-[10px] bordered bg-[#1D1D1D]">
          <span className=" h-full px-[14px] flex items-center">
            <Searchbar />
          </span>
          <input
            className="w-full h-full border-white bg-transparent placeholder-[#ffffff36]  text-[#ffffff81] text-md focus:outline-none"
            placeholder="Search here..."
          />
        </div>

        <div className="lg:hidden">
          <button
            onClick={toggleCollapse}
            className="text-white focus:outline-none focus:border-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <div className="lg:flex justify-center items-center gap-6 hidden">
        {/* <CustomDdown/>  
           */}

           <div>
            <CustomDdown />
           </div>
          <div className=" bg-gray-600 rounded-md p-3">
            <Notification />
          </div>
          <div className="flex gap-4">
          <NavPerson />
          <div>
          <p className="text-white">Alex Khan</p>
          <p className="text-gray-700">My Account</p>
          </div>
          <DropDownIcon />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
