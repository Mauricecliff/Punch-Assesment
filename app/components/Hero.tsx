"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full bg-[#ffffff] pt-4 md:pt-8">
      <div className="mx-auto px-4 md:px-6 py-6">
        <motion.div
          className="w-full overflow-hidden rounded-md bg-[#ffffff]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.video
            src="/Zwilt_Hero_Animation.mp4"
            autoPlay
            muted
            loop
            playsInline
            initial={{ scale: 1.03 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="h-[280px] w-full object-cover sm:h-[360px] md:h-[520px] lg:h-[740px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
