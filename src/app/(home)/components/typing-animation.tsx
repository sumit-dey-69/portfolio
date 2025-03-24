"use client";
import { cn } from "@/utils/cn";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

type Props = {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
};

const TypingAnimation = ({ text, className, delay = 0.05, duration = 1 }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <span className={cn(className)}>
      {mounted
        ? text.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: index * delay,
                duration: duration,
                ease: "easeOut",
              }}
            >
              {char}
            </motion.span>
          ))
        : text}
    </span>
  );
};

export default TypingAnimation;
