import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-white shadow-sm">
      <div className=" px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center ">
          {" "}
          <svg
            cl
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-sprout h-8 w-8 text-emerald-600"
          >
            <path d="M7 20h10"></path>
            <path d="M10 20c5.5-2.5.8-6.4 3-10"></path>
            <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"></path>
            <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"></path>
          </svg>
          <span className="ml-2 text-xl font-bold text-gray-800">
            Eco<span className="text-[#009966]">Growers</span>
          </span>
        </div>

        <div className="flex space-x-4 justify-between items-center">
          <NavLink to="/" className="text-[#009966] hover:underline " >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-[#009966] hover:underline"
          >
            About
          </NavLink>
          <NavLink 
            to="/login"
            className="text-[#009966] border-1 duration-300 px-2 py-1 rounded-lg hover:bg-[#009966] hover:text-white"
          >
            login
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Header;
