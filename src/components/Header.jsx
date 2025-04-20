import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  RiPlantLine,
  RiLeafLine,
  RiMenuLine,
  RiCloseLine,
} from "react-icons/ri";
import { FaSeedling, FaUserCircle } from "react-icons/fa";
import { GrGrow } from "react-icons/gr";
import { GiStonePile } from "react-icons/gi"; // Added import for soil icon

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <NavLink to="/" className="flex items-center group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-sprout h-8 w-8 text-emerald-600 group-hover:text-emerald-700 transition-colors"
            >
              <path d="M7 20h10"></path>
              <path d="M10 20c5.5-2.5.8-6.4 3-10"></path>
              <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"></path>
              <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"></path>
            </svg>
            <span className="ml-2 text-xl font-bold text-gray-800">
              Eco<span className="text-emerald-600">Growers</span>
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-emerald-700 font-medium flex items-center"
                  : "text-emerald-600 hover:text-emerald-700 flex items-center"
              }
            >
              <RiLeafLine className="mr-1" />
              Home
            </NavLink>

            <NavLink
              to="/crops"
              className={({ isActive }) =>
                isActive
                  ? "text-emerald-700 font-medium flex items-center"
                  : "text-emerald-600 hover:text-emerald-700 flex items-center"
              }
            >
              <RiPlantLine className="mr-1" />
              Crops
            </NavLink>

            <NavLink
              to="/grow"
              className={({ isActive }) =>
                isActive
                  ? "text-emerald-700 font-medium flex items-center"
                  : "text-emerald-600 hover:text-emerald-700 flex items-center"
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              <GrGrow className="mr-1" />
              Grow
            </NavLink>

            {/* Added Soil NavLink */}
            <NavLink
              to="/soil"
              className={({ isActive }) =>
                isActive
                  ? "text-emerald-700 font-medium flex items-center"
                  : "text-emerald-600 hover:text-emerald-700 flex items-center"
              }
            >
              <GiStonePile className="mr-1" />
              Soil
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-emerald-700 font-medium"
                  : "text-emerald-600 hover:text-emerald-700"
              }
            >
              About
            </NavLink>

            
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-emerald-600 p-2"
            >
              {mobileMenuOpen ? (
                <RiCloseLine className="h-6 w-6" />
              ) : (
                <RiMenuLine className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-emerald-50 text-emerald-700 block px-3 py-2 rounded-md font-medium flex items-center"
                  : "text-emerald-600 hover:bg-emerald-50 block px-3 py-2 rounded-md flex items-center"
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              <RiLeafLine className="mr-2" />
              Home
            </NavLink>

            <NavLink
              to="/crops"
              className={({ isActive }) =>
                isActive
                  ? "bg-emerald-50 text-emerald-700 block px-3 py-2 rounded-md font-medium flex items-center"
                  : "text-emerald-600 hover:bg-emerald-50 block px-3 py-2 rounded-md flex items-center"
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              <RiPlantLine className="mr-2" />
              Crops
            </NavLink>

            <NavLink
              to="/grow"
              className={({ isActive }) =>
                isActive
                  ? "bg-emerald-50 text-emerald-700 block px-3 py-2 rounded-md font-medium flex items-center"
                  : "text-emerald-600 hover:bg-emerald-50 block px-3 py-2 rounded-md flex items-center"
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              <GrGrow className="mr-2" />
              Grow
            </NavLink>

            {/* Added Soil NavLink for mobile menu */}
            <NavLink
              to="/soil"
              className={({ isActive }) =>
                isActive
                  ? "bg-emerald-50 text-emerald-700 block px-3 py-2 rounded-md font-medium flex items-center"
                  : "text-emerald-600 hover:bg-emerald-50 block px-3 py-2 rounded-md flex items-center"
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              <GiStonePile className="mr-2" />
              Soil
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "bg-emerald-50 text-emerald-700 block px-3 py-2 rounded-md font-medium"
                  : "text-emerald-600 hover:bg-emerald-50 block px-3 py-2 rounded-md"
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
