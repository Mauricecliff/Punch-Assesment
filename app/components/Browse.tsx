"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Browse() {
  return (
    <motion.section
      className="bg-[#f8f8f9] py-16 md:py-24"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-center px-4 sm:px-6">
        <span className="inline-flex rounded-full bg-[#b8abff] px-4 py-1.5 text-[11px] font-semibold tracking-[0.01em] text-[#26223f]">
          Browse
        </span>

        <h2 className="mt-6 text-center text-[32px] leading-[1.05] font-semibold tracking-[-0.02em] text-[#262836] sm:text-[40px] md:text-[58px]">
          Our product starts with a
          <br />
          revolutionary <span className="bg-[#e9cb68] px-2">browsing</span>
          <br />
          <span className="bg-[#e9cb68] px-2">experience.</span>
        </h2>

        <motion.div
          className="mt-10 grid w-full max-w-[760px] grid-cols-1 gap-3 text-center text-[12px] font-semibold text-[#262836] sm:grid-cols-3"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
        >
          <p>Pre-Meet™</p>
          <p>Click to Skip™</p>
          <p>No Recruiter fee</p>
        </motion.div>

        <motion.div
          className="mt-5 w-full max-w-[1020px] overflow-hidden rounded-2xl bg-[#b7a8ff] p-3 shadow-[0_28px_60px_rgba(35,23,76,0.15)] sm:p-5 md:p-8"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          <Image
            src="/section-3.png"
            alt="Browse experience interface"
            width={1200}
            height={740}
            className="h-auto w-full rounded-xl object-cover"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
