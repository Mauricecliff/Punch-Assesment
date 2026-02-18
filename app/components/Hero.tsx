"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full bg-[#ffffff] pt-6 md:pt-8">
      <div className="mx-auto px-4 md:px-6 py-6">
        <div className="w-full overflow-hidden rounded-md bg-[#ffffff]">
          <motion.video
            src="/Zwilt_Hero_Animation.mp4"
            autoPlay
            muted
            loop
            playsInline
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-[420px] w-full object-cover md:h-[520px] lg:h-[740px]"
          />
        </div>
      </div>
    </section>
  );
}
