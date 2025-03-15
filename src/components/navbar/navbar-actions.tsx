import { cn } from "@/utils/cn";
import Link from "next/link";

type Props = {
  className?: string;
};

const pages = [
  { name: "home", path: "/" },
  { name: "resume", path: "/resume" },
  { name: "projects", path: "/projects" },
  { name: "contact", path: "/contact" },
];

const NavbarActions = ({ className }: Props) => {
  return (
    <div className={cn("space-x-4 *:hover:text-primary-500", className)}>
      {pages.map((page) => (
        <Link key={page.name} href={page.path}>
          {page.name.charAt(0).toUpperCase() + page.name.slice(1)}
        </Link>
      ))}
    </div>
  );
};

export default NavbarActions;
