"use client";

import { motion } from "framer-motion";

export default function Store() {
  return (
    <motion.section
      className="bg-[#ececf0] pb-16 md:pb-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="mx-auto w-full max-w-[1300px] bg-white px-4 py-12 sm:px-6 md:py-14">
        <h2 className="mx-auto w-fit text-center text-[34px] leading-[0.95] font-semibold tracking-[-0.03em] text-[#232634] sm:text-[42px] md:text-[60px]">
          <span className="bg-[#e9cb68] px-2">Browse our store</span>
          <br />
          of talent at any time
        </h2>
      </div>
    </motion.section>
  );
}
