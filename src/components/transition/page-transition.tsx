"use client";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren;

function PageTransition({ children }: Props) {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-screen h-screen fixed bg-default-background top-0 pointer-events-none"
        ></motion.div>
        {children}
      </div>
    </AnimatePresence>
  );
}

export default PageTransition;
