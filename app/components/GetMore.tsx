"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function GetMore() {
  return (
    <motion.section
      className="bg-[#e6e7eb] py-16 md:py-24"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6">
        <motion.div
          className="overflow-hidden rounded-xl bg-[#f3f4f6] p-2 shadow-[0_24px_60px_rgba(17,24,39,0.16)] sm:p-3 md:p-4"
          initial={{ opacity: 0, scale: 0.985 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <Image
            src="/section-6.png"
            alt="AI interviewer experience"
            width={1920}
            height={1267}
            className="h-auto w-full rounded-lg object-cover"
          />
        </motion.div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <motion.h2
            className="max-w-[520px] text-[34px] leading-[0.95] font-semibold tracking-[-0.03em] text-[#232634] sm:text-[44px] md:text-[56px]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            An AI interviewer
            <br />
            that is optimized to
            <br />
            get the most
            <br />
            information.
          </motion.h2>

          <motion.p
            className="max-w-[520px] pt-1 text-[14px] leading-[1.55] font-medium text-[#4e5260] md:text-[15px]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Suggest topics or themes you want the interview to touch on and let our interviewer do the work for you.{' '}
            <span className="bg-[#e9cb68] px-1 text-[#2b2f3b]">
              Our interviewers have no preset path. The questions are determined organically based on candidate responses.
            </span>{' '}
            This line of questioning is optimized to get deep information on candidates&apos; area of expertise while maintaining a broad discussion.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}
