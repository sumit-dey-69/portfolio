"use client";
import { useRouter } from "next/navigation";
import Button from "../button";
import Logo from "../logo";
import NavbarActions from "./navbar-actions";
import NavbarHamburger from "./navbar-hamburger";

function Navbar() {
  const router = useRouter();
  return (
    <nav className="flex justify-between py-4 items-center z-50 @container">
      <Logo />
      <div className="@max-md:space-x-5 grid grid-cols-[1fr_auto] gap-5 items-center">
        <NavbarActions className="@max-md:hidden" />
        <Button type="button" onClick={() => router.push("/contact")}>
          Hire Me
        </Button>
        <NavbarHamburger>
          <NavbarActions className="grid space-y-5" />
        </NavbarHamburger>
      </div>
    </nav>
  );
}

export default Navbar;
