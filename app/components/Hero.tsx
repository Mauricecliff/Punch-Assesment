"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full pt-6 md:pt-8">
      <div className="mx-auto px-4 md:px-6 py-6">
        {/* Rounded only on mobile + tablet */}
        <div className="w-full rounded-md ">
          <motion.img
            src="/hero.png"
            alt="Hero"
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              w-full
              h-[420px] md:h-[520px] lg:h-[1130px]
              object-cover
            "
          />
        </div>
      </div>
    </section>
  );
}
