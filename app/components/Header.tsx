"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState("Product");

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
      <div className="bg-[#50589F] text-[#ffffff]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-3 text-[13px] font-bold sm:px-6 sm:text-[15px] md:h-14 md:flex-nowrap md:py-2 md:text-[16px]">
          <p className="w-full text-center md:w-auto md:text-left">Pre-meet talent.</p>

          <p className="hidden flex-1 text-center text-[15px] font-bold whitespace-nowrap md:block">
            We’ll be adding voice based search in the next build launching on 28th Nov 2023 🚀
          </p>

          <p className="w-full text-center md:w-auto md:text-right">+1 415-993-9538</p>
        </div>
      </div>

      <div className="bg-[#ffffff]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <motion.div whileHover={{ scale: 1.05 }} className="flex cursor-pointer items-center space-x-2">
            <Image src="/logo.png" alt="Logo" width={136} height={33} priority className="h-auto w-[118px] sm:w-[136px]" />
          </motion.div>

          <nav
            className="hidden items-center space-x-8 text-sm font-medium text-[#282833] md:flex"
            onMouseLeave={() => setHovered("Product")}
          >
            {navItems.map((item) => (
              <motion.a
                key={item}
                href="#"
                className="relative cursor-pointer pb-1"
                whileHover={{ scale: 1.05 }}
                onMouseEnter={() => setHovered(item)}
              >
                {item}
                {hovered === item && (
                  <motion.span
                    layoutId="navUnderline"
                    className="absolute left-0 -bottom-1 h-[2px] w-full rounded-full bg-[#FFBE2E]"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center space-x-3 sm:space-x-6">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="hidden items-center space-x-2 text-sm text-gray-700 hover:text-gray-900 md:flex"
            >
              <Image src="/user.svg" alt="User" width={18} height={18} />
              <span>Log in</span>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-md bg-gray-900 px-3 py-2 text-xs text-white transition hover:bg-black sm:px-5 sm:text-sm"
            >
              Schedule a demo
            </motion.button>

            <button className="cursor-pointer md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="px-6 pb-6 md:hidden"
            >
              <div className="flex flex-col space-y-4 text-sm font-medium text-[#282833]">
                {navItems.map((item) => (
                  <motion.a key={item} href="#" whileHover={{ scale: 1.05 }} className="relative cursor-pointer">
                    {item}
                  </motion.a>
                ))}

                <motion.a href="#" whileHover={{ scale: 1.05 }} className="flex items-center space-x-2 pt-4 text-gray-700">
                  <Image src="/user.svg" alt="User" width={18} height={18} />
                  <span>Log in</span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
