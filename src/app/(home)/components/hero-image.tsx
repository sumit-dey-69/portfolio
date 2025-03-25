"use client";
import { cn } from "@/utils/cn";
import { motion } from "motion/react";

type Props = {
  className?: string;
};

function HeroImage({ className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1.02 }}
      transition={{ delay: 0.2, ease: "easeIn" }}
      className={cn("flex justify-center items-center relative", className)}
    >
      <motion.div
        className="h-auto aspect-square max-w-[25em] w-full bg-secondary-700/50 outline-5 outline-secondary-700 rounded-b-[50%] rounded-t-[50%]"
        initial={{ borderTopLeftRadius: "70%", borderTopRightRadius: "70%" }}
        animate={{
          borderTopLeftRadius: ["45%", "50%", "40%", "45%", "50%"],
          borderTopRightRadius: ["50%", "45%", "40%", "50%", "45%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
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
