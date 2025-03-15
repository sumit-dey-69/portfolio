import { cn } from "@/utils/cn";
import Link from "next/link";

type Props = {
  className?: string;
  textClassName?: string;
};

function Logo({ className, textClassName }: Props) {
  return (
    <div className={cn("@container", className)}>
      <Link href="/">
        <h1 className={cn("text-[1.25em] @md:text-[1.5em] -space-x-[0.1em]", textClassName)}>
          <span>SUMIT</span>
          <span className="text-primary-600 -space-x-[0.09em]">
            <span>.</span>
            <span>dev</span>
          </span>
        </h1>
      </Link>
    </div>
  );
}

export default Logo;
