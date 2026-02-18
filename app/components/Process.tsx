"use client";

import { motion } from "framer-motion";

export default function Process() {
  return (
    <motion.section
      className="bg-[#f8f8f9] py-16 md:py-24"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <span className="inline-flex rounded-full bg-[#b8abff] px-4 py-1.5 text-[11px] font-semibold tracking-[0.01em] text-[#26223f]">
          Process
        </span>

        <h2 className="mt-6 max-w-[940px] text-[32px] leading-[1.05] font-semibold tracking-[-0.02em] text-[#262836] sm:text-[40px] md:text-[54px]">
          To top it off, the <span className="bg-[#e9cb68] px-2">interview process</span>
          <br />
          has never been more on <span className="bg-[#e9cb68] px-2">autopilot.</span>
        </h2>
      </div>
    </motion.section>
  );
}
