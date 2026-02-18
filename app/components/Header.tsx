"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState("Product"); // ✅ default underline

  const navItems = [
    "Product",
    "Features",
    "Interviews",
    "Tracker",
    "Candidates",
    "Tutorials",
    "Contact",
  ];

  return (
    <header className="w-full">
      {/* Top Announcement Bar */}
      <div className="bg-[#50589F] text-[#ffffff] h-14">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
          <p className="text-[16px] font-bold">Pre-meet talent.</p>

          <p className="hidden md:block text-center flex-1 text-[16px] font-bold whitespace-nowrap">
            We’ll be adding voice based search in the next build launching on 28th Nov 2023 🚀
          </p>

          <p className="text-[16px] font-bold">+1 415-993-9538</p>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-[#ffffff]">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <img src="/logo.png" alt="Logo" className="w-[136px] h-[33px]" />
          </motion.div>

          {/* Navigation Links */}
          <nav
            className="hidden md:flex items-center text-[#282833] space-x-8 text-sm font-medium"
            onMouseLeave={() => setHovered("Product")} // return to default
          >
            {navItems.map((item) => (
              <motion.a
                key={item}
                href="#"
                className="relative pb-1 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onMouseEnter={() => setHovered(item)}
              >
                {item}

                {/* Animated Shared Underline */}
                {hovered === item && (
                  <motion.span
                    layoutId="navUnderline"
                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#FFBE2E] rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-6">
            {/* Login */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="hidden md:flex items-center space-x-2 text-sm text-gray-700 hover:text-gray-900 cursor-pointer"
            >
              <img src="/user.svg" alt="" />
              <span>Log in</span>
            </motion.a>

            {/* Schedule Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-gray-900 text-white text-sm px-5 py-2 rounded-md hover:bg-black transition cursor-pointer"
            >
              Schedule a demo
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="md:hidden px-6 pb-6"
            >
              <div className="flex flex-col space-y-4 text-sm font-medium text-[#282833]">
                {navItems.map((item) => (
                  <motion.a
                    key={item}
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    className="relative cursor-pointer"
                  >
                    {item}
                  </motion.a>
                ))}

                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 text-gray-700 pt-4"
                >
                  <img src="/user.svg" alt="" />
                  <span>Log in</span>
                </motion.a>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-gray-900 text-white px-5 py-2 rounded-md"
                >
                  Schedule a demo
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
