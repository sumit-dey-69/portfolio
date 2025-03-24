import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  className?: string;
};

const pages = [
  { name: "home", path: "/" },
  { name: "resume", path: "/resume" },
  { name: "projects", path: "/projects" },
  { name: "contact", path: "/contact" },
];

function NavbarActions({ className }: Props) {
  const pathname = usePathname();
  return (
    <div className={cn("space-x-4 *:hover:text-primary-500", className)}>
      {pages.map((page) => (
        <Link key={page.name} href={page.path} className={`${pathname === page.path && "text-primary-400 font-bold"}`}>
          {page.name.charAt(0).toUpperCase() + page.name.slice(1)}
        </Link>
      ))}
    </div>
  );
}

export default NavbarActions;
