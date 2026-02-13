import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/theme/themeSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.theme.mode);

  // Mobile menu toggle state
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex justify-center mt-6 px-3">
      {/* Navbar Wrapper */}
      <div
        className="w-full max-w-6xl bg-[#2d2f33] dark:bg-[#2d2f33] light:bg-gray-200 
        rounded-full px-6 sm:px-10 py-4 flex items-center justify-between shadow-lg transition"
      >
        {/* Logo */}
        <h1 className="text-white dark:text-white light:text-black text-2xl font-bold tracking-wide">
          NEXA
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-white dark:text-white light:text-black text-lg font-medium">
          <li className="hover:text-gray-400 cursor-pointer transition">
            Home
          </li>
          <li className="hover:text-gray-400 cursor-pointer transition">
            Shop now
          </li>
          <li className="hover:text-gray-400 cursor-pointer transition">
            About us
          </li>
          <li className="hover:text-gray-400 cursor-pointer transition">
            Contact Us
          </li>
        </ul>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={() => dispatch(toggleTheme())}
            className="px-4 py-2 rounded-full bg-black text-white 
            dark:bg-black light:bg-white light:text-black border border-gray-500 transition text-sm"
          >
            {themeMode === "dark" ? "🌙" : "☀️"}
          </button>

          {/* Hamburger Button (Mobile Only) */}
          <button
            className="md:hidden text-white dark:text-white light:text-black text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          className="absolute top-24 w-[90%] max-w-6xl bg-[#2d2f33] 
          dark:bg-[#2d2f33] light:bg-gray-200 rounded-2xl shadow-lg p-6 md:hidden"
        >
          <ul className="flex flex-col gap-5 text-white dark:text-white light:text-black text-lg font-medium">
            <li
              className="hover:text-gray-400 cursor-pointer transition"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </li>
            <li
              className="hover:text-gray-400 cursor-pointer transition"
              onClick={() => setMenuOpen(false)}
            >
              Shop now
            </li>
            <li
              className="hover:text-gray-400 cursor-pointer transition"
              onClick={() => setMenuOpen(false)}
            >
              About us
            </li>
            <li
              className="hover:text-gray-400 cursor-pointer transition"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
