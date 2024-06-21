import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-blue-500">
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white shadow-md">
        {/* Logo and Company Name */}
        <Link className="text-2xl md:text-3xl font-bold flex items-center" to="/" onClick={closeMenu}>
          <img className="h-10 mr-2" src={logo} alt="Company Logo" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-green-800 animate-pulse">
            NutriSprout
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-blue-600 p-3 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            <svg className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Main Navigation Links */}
        <ul className={`hidden lg:flex lg:mx-auto lg:items-center lg:space-x-6 ${isOpen ? "hidden" : ""}`}>
          {["Home", "About", "Services", "Products", "Contact"].map((item, index) => (
            <li key={index}>
              <Link
                className={`text-sm ${item === "About" ? "text-blue-600 font-bold" : "text-gray-700 hover:text-gray-900"} transition-colors duration-200 transform hover:-translate-y-1`}
                to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                onClick={closeMenu}
              >
                {item}
              </Link>
            </li>
          ))}
          {/* Cart Link */}
          <li>
            <Link
              to="/cart"
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200 transform hover:-translate-y-1"
              onClick={closeMenu}
            >
              Cart
            </Link>
          </li>
        </ul>

        {/* Sign In and Sign Up Links */}
        <div className={`hidden lg:flex lg:items-center lg:space-x-4 ${isOpen ? "hidden" : ""}`}>
          <Link
            className="py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200 transform hover:scale-105"
            to="/signin"
            onClick={closeMenu}
          >
            Sign In
          </Link>
          <Link
            className="py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200 transform hover:scale-105"
            to="/signup"
            onClick={closeMenu}
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="navbar-menu fixed inset-0 z-50">
          <div className="navbar-backdrop absolute inset-0 bg-gray-800 opacity-50" onClick={closeMenu}></div>
          <nav className="absolute top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
            {/* Mobile Menu Logo */}
            <div className="flex items-center mb-8">
              <Link className="mr-auto text-3xl font-bold leading-none" to="/" onClick={closeMenu}>
                <img className="h-10" src={logo} alt="Company Logo" />
              </Link>
              <button className="navbar-close" onClick={closeMenu} aria-label="Close Menu">
                <svg className="h-6 w-6 text-gray-700 cursor-pointer hover:text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Links */}
            <div>
              <ul>
                {["Home", "About", "Services", "Products", "Contact"].map((item, index) => (
                  <li className="mb-1" key={index}>
                    <Link
                      className="block p-4 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors duration-200 transform hover:translate-x-1"
                      to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                      onClick={closeMenu}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
                {/* Cart Link */}
                <li className="mb-1">
                  <Link
                    to="/cart"
                    className="block p-4 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors duration-200 transform hover:translate-x-1"
                    onClick={closeMenu}
                  >
                    Cart
                  </Link>
                </li>
              </ul>
            </div>

            {/* Mobile Menu Sign In and Sign Up */}
            <div className="mt-auto">
              <div className="pt-6">
                <Link
                  className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold bg-gray-50 hover:bg-gray-100 rounded-xl transition duration-200 transform hover:scale-105"
                  to="/signin"
                  onClick={closeMenu}
                >
                  Sign In
                </Link>
                <Link
                  className="block px-4 py-3 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-xl transition duration-200 transform hover:scale-105"
                  to="/signup"
                  onClick={closeMenu}
                >
                  Sign Up
                </Link>
              </div>
              {/* Copyright */}
              <p className="my-4 text-xs text-center text-gray-400">
                <span>Copyright © 2024 NUTRISPROUT</span>
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
