"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Talents() {
  return (
    <motion.section
      className="bg-[#ececf0] py-12 md:py-16"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto w-full max-w-[1300px] rounded-2xl bg-[#afa4f0] px-4 pt-6 pb-5 md:px-8 md:pt-8 lg:px-10 lg:pt-10">
        <p className="mx-auto w-fit rounded-full bg-[#8f83da] px-3 py-1 text-[10px] leading-none font-semibold tracking-[0.03em] text-[#232634] md:text-[11px]">
          Search
        </p>

        <h2 className="mx-auto mt-5 max-w-[900px] text-center text-[32px] leading-[0.98] font-semibold tracking-[-0.03em] text-[#232634] sm:text-[44px] md:text-[62px]">
          It continues with your company
          <br />
          getting an advantage in the
          <br />
          <span className="bg-[#e9cb68] px-2">search for talent.</span>
        </h2>

        <p className="mx-auto mt-8 max-w-[640px] text-center text-[18px] leading-[1.2] font-semibold text-[#2b2f3b] md:mt-14 md:text-[40px] lg:text-[42px]">
          Whether you browse or search for a candidate,
          <br />
          everything is right there.
        </p>

        <motion.div
          className="-mx-2 mt-8 overflow-hidden rounded-[12px] md:mx-0 md:mt-10 md:rounded-[16px]"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          <Image
            src="/section-7.png"
            alt="Talent search interface"
            width={1920}
            height={1260}
            className="h-auto w-full object-cover"
            priority
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
