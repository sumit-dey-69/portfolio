"use client";
import { cn } from "@/utils/cn";
import { motion } from "motion/react";

type Props = {
  text: string;
  className?: string;
  delay?: number;
};

const TypingAnimation = ({ text, className, delay = 0.1 }: Props) => {
  return (
    <span className={cn(className)}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * delay, duration: 1 }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

export default TypingAnimation;
