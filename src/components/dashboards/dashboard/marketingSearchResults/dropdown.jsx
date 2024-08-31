import React from "react";

const Dropdown = ({name}) => {
  return (
    <div>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-white text-opacity-40 bg-[#3d3d3d] font-medium rounded-lg text-sm px-5 h-[38px] text-center inline-flex items-center"
        type="button">
        {name}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="dropdown"
        className="z-10 hidden bg-[#3d3d3d] divide-y divide-gray-900 rounded-lg shadow w-44 mt-0.5 ">
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton">
          <li>
            <a
              href="/Dashboard"
              className="block px-4 py-2">
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="/Setting"
              className="block px-4 py-2">
              Settings
            </a>
          </li>
          <li>
            <a
              href="/Earnings"
              className="block px-4 py-2">
              Earnings
            </a>
          </li>
          <li>
            <a
              href="/"
              className="block px-4 py-2">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
