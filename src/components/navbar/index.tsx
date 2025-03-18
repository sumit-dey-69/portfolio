import Link from "next/link";
import Logo from "../logo";
import NavbarActions from "./navbar-actions";
import NavbarHamburger from "./navbar-hamburger";

function Navbar() {
  return (
    <nav className="flex justify-between py-4 items-center z-50 @container">
      <Logo />
      <div className="@max-md:space-x-5 grid grid-cols-[1fr_auto] gap-5 items-center">
        <NavbarActions className="@max-md:hidden" />
        <Link
          href="/contact"
          className="bg-primary-500 border-[0.15em] active:bg-green-400 hover:bg-primary-400/90 border-secondary-500 hover:border-transparent px-2 py-1 rounded-md text-[0.75em] @md:text-[0.85em]"
        >
          Hire Me
        </Link>
        <NavbarHamburger>
          <NavbarActions className="grid space-y-5" />
        </NavbarHamburger>
      </div>
    </nav>
  );
}

export default Navbar;
