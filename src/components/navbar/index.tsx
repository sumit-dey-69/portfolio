import Link from "next/link";
import Logo from "../logo";
import NavbarActions from "./navbar-actions";
// import NavbarActions from "./navbar-actions";
import NavbarHamburger from "./navbar-hamburger";

const Navbar = () => {
  return (
    <nav className="grid grid-cols-[1fr_auto_auto] py-4 place-content-center justify-between items-center space-x-5 @container">
      <Logo />
      <NavbarActions className="@max-md:hidden" />
      <div className="@max-md:space-x-10">
        <Link href="/contact" className="bg-primary-500 border-[0.15em] active:bg-green-400 hover:bg-primary-400/90 border-secondary-500 hover:border-transparent px-2 py-1 rounded-md text-[0.75em] md:text-[0.85em]">
          Hire Me
        </Link>
        <NavbarHamburger>
          <NavbarActions className="grid space-y-5" />
        </NavbarHamburger>
      </div>
    </nav>
  );
};

export default Navbar;
