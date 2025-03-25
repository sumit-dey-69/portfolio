"use client";
import { cn } from "@/utils/cn";
import {
  useSetToggleHamburger,
  useToggleHamburger,
} from "@/zustand/hamburger-state";
import { PropsWithChildren } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

type Props = PropsWithChildren<{
  className?: string;
}>;

function NavbarHamburger({ className, children }: Props) {
  const toggleHamburger = useToggleHamburger();
  const setToggleHamburger = useSetToggleHamburger();
  return (
    <aside
      className={cn(
        "min-md:hidden flex flex-col absolute right-0 top-0 h-full",
        toggleHamburger &&
          "bg-neutral-50/50 backdrop-blur-xs w-full justify-center items-center",
        className
      )}
    >
      <button
        type="button"
        className="absolute top-0 right-0 pt-5 pr-5 *:text-neutral-500 *:hover:text-primary-500 cursor-pointer"
        onClick={() => setToggleHamburger(!toggleHamburger)}
      >
        {toggleHamburger ? (
          <RxCross2 className="text-[1.5em]" />
        ) : (
          <GiHamburgerMenu className="text-[1.5em]" />
        )}
      </button>
      {toggleHamburger && children}
    </aside>
  );
}

export default NavbarHamburger;
