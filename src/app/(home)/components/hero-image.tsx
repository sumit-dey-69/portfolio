"use client";
import { motion } from "motion/react";

function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1, ease: "easeIn" }}
      className="flex justify-center items-center relative"
    >
      <div className="h-auto aspect-square max-w-[25em] w-full rounded-full blur-xs bg-secondary-700/50"></div>
      <motion.img
        src="/picture.webp"
        alt="Profile Picture"
        width={400}
        height={400}
        className="h-auto aspect-square max-w-[25em] w-full rounded-full absolute"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0)" }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeIn" }}
      />
    </motion.div>
  );
}

export default HeroImage;
