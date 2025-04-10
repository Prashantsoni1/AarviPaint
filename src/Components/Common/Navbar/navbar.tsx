import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../../../public/assets/navbar/arrvi_logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Color Palettes", path: "/colorCombination" },
  { label: "Products", path: "/products" },
  { label: "Contact", path: "/contact" },
];

const StickyNavbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="sticky top-0 bg-white shadow-[0px_4px_10px_rgba(0,0,0,0.1)] z-[1100]">
        <div className="flex justify-between items-center px-4 py-3 max-w-7xl mx-auto">
          {/* Logo */}
          <div>
            <img
              src={logo}
              alt="logo"
              className="w-[96.75px] h-[54px] object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 font-['Poppins']">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`no-underline transition-colors duration-300 hover:text-[#8224E3] ${
                  location.pathname === item.path
                    ? "text-[#8224E3] font-bold"
                    : "text-black"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleDrawer}
            className="block md:hidden bg-transparent border-0 text-black focus:outline-none"
            aria-label="Toggle menu"
          >
            <FiMenu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-[1200] transition-all duration-300 ease-in-out ${
          open ? "visible bg-black bg-opacity-50" : "invisible"
        }`}
        onClick={toggleDrawer}
      >
        <div
          className={`absolute top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={toggleDrawer}
              className="text-black bg-transparent border-0 focus:outline-none"
              aria-label="Close menu"
            >
              <FiX className="w-6 h-6" />
            </button>
          </div>

          {/* Logo */}
          <div className="flex justify-center py-4">
            <img
              src={logo}
              alt="logo"
              className="w-[96.75px] h-[54px] object-contain"
            />
          </div>

          {/* Mobile Navigation Links */}
          <nav className="mt-4">
            <ul>
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={toggleDrawer}
                    className={`block px-6 py-3 transition-colors duration-200 ${
                      location.pathname === item.path
                        ? "text-[#8224E3] font-bold"
                        : "text-black hover:text-[#8224E3]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default StickyNavbar;