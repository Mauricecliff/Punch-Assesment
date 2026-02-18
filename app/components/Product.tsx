"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Product() {
  return (
    <motion.section
      className="bg-[#ffffff] py-14 md:py-20"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      <div className="mx-auto flex max-w-[1320px] flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-start lg:gap-12">
        <motion.div
          className="max-w-[620px] pt-2"
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <span className="inline-flex rounded-full bg-[#b8abff] px-5 py-2 text-sm font-semibold text-[#26223f]">
            Product
          </span>

          <h1 className="mt-7 text-[34px] leading-[1.06] font-semibold tracking-[-0.02em] text-[#262836] sm:text-[42px] md:text-[52px] lg:text-[67px]">
            Zwilt is a modern day <span className="bg-[#e9cb68] px-2">recruitment platform</span>
            <br />
            We use AI interviewers,
            <br />
            video interviews, and
            <br />
            full text search of
            <br />
            transcripts to help
            <br />
            companies hire better.
          </h1>
        </motion.div>

        <motion.div
          className="w-full max-w-[760px]"
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative overflow-hidden rounded-xl bg-[#efeff1] p-3 shadow-[0_18px_60px_rgba(17,24,39,0.12)]">
            <Image
              src="/section-1.png"
              alt="Zwilt platform preview"
              width={1200}
              height={800}
              className="h-auto w-full rounded-lg object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
