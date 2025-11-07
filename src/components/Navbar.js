// src/components/Navbar.js
import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Resume", link: "#resume" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-gray-950/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          className="text-2xl font-bold text-blue-400 tracking-wide"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Samiran.Dev
        </motion.h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
          {navItems.map((item, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <a
                href={item.link}
                className="relative group transition-colors duration-300"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden text-gray-300 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          className="md:hidden flex flex-col items-center bg-gray-900 text-gray-300 py-4 space-y-4 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {navItems.map((item, i) => (
            <li key={i}>
              <a
                href={item.link}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-blue-400 transition"
              >
                {item.name}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;
