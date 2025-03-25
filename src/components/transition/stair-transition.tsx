"use client";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import Stairs from "./stairs";

function StairTransition() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  console.log(pathname);
  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <div className="w-screen h-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
          <Stairs />
        </div>
        <motion.div
          className="w-screen h-screen fixed bg-default-background top-0 pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
        ></motion.div>
      </div>
    </AnimatePresence>
  );
}

export default StairTransition;
