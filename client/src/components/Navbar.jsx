import React, { useState } from "react";
import logo from "../assets/logo.png";
import user from "../assets/man.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  console.log("Navbar rendered"); // Log statement for debugging

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdownMenu = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-[#FFFAF5] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-800 hover:bg-[#FFE4CC] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:justify-start">
            <Link to="/">
              <img className="h-20 w-auto" src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:justify-center space-x-8">
            {/* <NavLink
              exact
              to="/candidate/form"
              className="text-gray-800 outline hover:bg-[#FFE4CC] hover:text-gray-900 hover:outline px-3 py-2 rounded-md text-normal font-medium active:bg-[#FFE4CC] active:text-[#FF7C00]"
              activeClassName="active"
            >
              Fill Form
            </NavLink> */}
            {/* <NavLink
              exact
              to="/candidate/profile"
              className="text-gray-800 outline hover:bg-[#FFE4CC] hover:text-gray-900 hover:outline px-3 py-2 rounded-md text-normal font-medium active:bg-[#FFE4CC] active:text-[#FF7C00]"
              activeClassName="active"
            >
              View Profile
            </NavLink> */}
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <div className="ml-3 relative">
              <button
                type="button"
                className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                id="user-menu-button"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
                onClick={toggleDropdownMenu}
              >
                <span className="sr-only">Open user menu</span>
                <img className="h-10 w-10 rounded-full" src={user} alt="User" />
              </button>
              <div
                className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 ${
                  isDropdownOpen ? "" : "hidden"
                }`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
              >
                {/* <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Edit Profile
                </Link>  */}
                {/* <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a> */}
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  {localStorage.getItem('authToken') ? <Link onClick={() => localStorage.removeItem('authToken')} to='/sign-in'>Sign Out</Link> : <Link to='/sign-in'>Sign In</Link>}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`sm:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <NavLink
            to="/candidate-form"
            className="text-gray-900 hover:bg-[#FFE4CC] hover:text-gray-900 hover:outline px-3 py-2 rounded-md text-normal font-medium active:bg-[#FFE4CC] active:text-[#FF7C00]"
          >
            Fill Form
          </NavLink>
          <NavLink
            to="/candidate-profile"
            className="text-gray-900 hover:bg-[#FFE4CC] hover:text-gray-900 hover:outline px-3 py-2 rounded-md text-normal font-medium active:bg-[#FFE4CC] active:text-[#FF7C00]"
          >
            View Profile
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
