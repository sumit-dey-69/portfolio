"use client";
import { cn } from "@/utils/cn";
import { motion } from "motion/react";
import { ComponentProps, PropsWithChildren } from "react";

type Props = ComponentProps<"button"> &
  PropsWithChildren<{
    type?: "button" | "submit" | "reset";
    className?: string;
    delay?: number;
    duration?: number;
    ease?: string;
  }>;

function Button({
  type,
  children,
  delay = 0,
  duration = 0.5,
  ease,
  className,
  ...props
}: Props) {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1 }}
      transition={{ duration: duration, delay: delay, ease: ease }}
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
