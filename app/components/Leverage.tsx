"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Leverage() {
  return (
    <motion.section
      className="bg-[#e9eaed] py-16 md:py-24"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      <div className="mx-auto flex w-full max-w-[1300px] flex-col items-center gap-10 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-14">
        <motion.div
          className="w-full max-w-[560px] lg:max-w-[360px]"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-[36px] leading-[0.98] font-semibold tracking-[-0.03em] text-[#282b39] sm:text-[44px] md:text-[58px]">
            Leverage Zwilt’s
            <br />
            technology for
            <br />
            your own
            <br />
            interviews.
          </h2>

          <p className="mt-6 text-[14px] leading-[1.55] font-medium text-[#5b5f6d] md:text-[15px]">
            All of the browsing, filtering &amp; search capabilities including Pre-Meet™ &amp; Click-to-Skip™ are available for your own interviews. It has never been easier to create an interview,{' '}
            <span className="bg-[#e9cb68] px-1.5 text-[#2b2f3b]">
              paste a link to your job post and the rest is done automagically!
            </span>
          </p>
        </motion.div>

        <motion.div
          className="w-full max-w-[860px]"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          <Image
            src="/section-4.png"
            alt="Leverage Zwilt technology interface"
            width={1200}
            height={760}
            className="h-auto w-full object-contain"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
