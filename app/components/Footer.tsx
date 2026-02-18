"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-[#27273a] text-white"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-16 px-4 pt-12 pb-5 sm:px-6 md:px-14 md:pt-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[280px_1fr] md:items-start md:gap-12">
          <div>
            <p className="text-[26px] leading-none font-bold tracking-[-0.03em]">zwilt ✶</p>
            <p className="mt-5 max-w-[220px] text-[11px] leading-[1.6] text-white/85">
              We take complex hiring processes - and simplify them. Connecting you to the world&apos;s highly qualified talent pool.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-2.5">
              <button className="inline-flex items-center gap-2 rounded-md bg-[#5b66ea] px-4 py-2 text-[11px] font-semibold tracking-[0.02em] text-white transition hover:bg-[#4e58df]">
                CTA 1 <span className="text-[#f3c54d]">→</span>
              </button>
              <button className="inline-flex items-center gap-2 rounded-md bg-[#5b66ea] px-4 py-2 text-[11px] font-semibold tracking-[0.02em] text-white transition hover:bg-[#4e58df]">
                CTA 2 <span className="text-[#f3c54d]">→</span>
              </button>
            </div>
          </div>

          <h2 className="max-w-[560px] text-[30px] leading-[1.05] font-semibold tracking-[-0.03em] text-white sm:text-[38px] md:mt-1 md:text-[49px]">
            Connecting the right people to the right businesses.
          </h2>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-5 text-[10px] text-white/80 md:flex-row md:items-center md:justify-between md:pt-4">
          <p>© 2022-2023 Zwilt.</p>
          <div className="flex flex-wrap items-center gap-6 md:gap-12">
            <a className="underline underline-offset-2" href="#">
              Privacy Policy
            </a>
            <a className="underline underline-offset-2" href="#">
              Terms &amp; Conditions
            </a>
          </div>
          <p>All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
}
