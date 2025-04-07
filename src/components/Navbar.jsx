import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Optional: You can use lucide or any icon lib

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinkClass = ({ isActive }) =>
    `block md:inline px-4 py-2 text-sm font-semibold ${
      isActive ? "text-purple-400" : "text-gray-400"
    } hover:text-white`;

  return (
    <>
      <nav className="bg-black text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="font-bold text-2xl">
            <span className="text-purple-500">&lt;</span>
            Pass
            <span className="text-purple-500">Man/&gt;</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contribute
            </NavLink>
          </ul>

          {/* Mobile Hamburger Icon */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 space-y-2 px-4 pb-4 bg-gray-900 rounded-lg">
            <NavLink to="/" onClick={toggleMenu} className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/contribute" onClick={toggleMenu} className={navLinkClass}>
              Contribute
            </NavLink>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
