import React from "react";
import Logo from "../../assets/Hirebird_Whitebanner 1.png";
import { useNavigate } from "react-router-dom";
const Navbar = ({setCollapsed,isCollapsed}) => {

  const toggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  const nav = useNavigate();
  const navigate=()=>{
    nav("/profile-detail")
  }
  return (
    <nav className="px-6 h-[110px] flex justify-center items-center">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex justify-center items-center">
        <img src={Logo} alt="err" className="" />
         
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

        <div className="lg:flex justify-center items-center gap-12 hidden"> 
          <a
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4"
          >
            Feed
          </a>
          <a
            href="/profile-detail"
            onClick={navigate}
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300"
          >
           My Profile
          </a>
          <a
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300"
          >
            Message
          </a>
          <a
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300"
          >
            Invitations
          </a>
        </div>
      </div>
      <div
        className={`lg:hidden  flex ${
          isCollapsed ? "hidden" : "flex"
        } flex-col lg:flex-row items-center`}
      >
        <a
          href="/"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4"
        >
          Home
        </a>
        <a
          href="/"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4"
        >
          About
        </a>
        <a
          href="/"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
