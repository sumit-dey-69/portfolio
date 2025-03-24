"use client";
import { motion } from "motion/react";

function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1.02 }}
      transition={{ delay: 0.2, ease: "easeIn" }}
      className="flex justify-center items-center relative"
    >
      <motion.div className="h-auto aspect-square max-w-[25em] w-full rounded-full blur-xs bg-secondary-700/50"></motion.div>
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
