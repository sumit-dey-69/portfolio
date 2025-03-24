"use client";
import { cn } from "@/utils/cn";
import { motion } from "motion/react";
import { ComponentProps, PropsWithChildren } from "react";

type Props = ComponentProps<"button"> &
  PropsWithChildren<{
    type?: "button" | "submit" | "reset";
    className?: string;
    delay?: number;
  }>;

function Button({ type, children, delay = 0, className, ...props }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: delay, ease: "easeIn" }}
    >
      <button
        type={type}
        className={cn(
          "hover:text-white p-[0.5em] flex items-center font-bold text-sm tracking-normal gap-[0.5em] border-[0.15em] bg-primary-500 hover:bg-primary-500/80 border-secondary-500/50 hover:border-primary-500 rounded-md cursor-pointer",
          className
        )}
        {...props}
      >
        {children}
      </button>
    </motion.div>
  );
}

export default Button;
