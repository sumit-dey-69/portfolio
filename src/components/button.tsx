import { cn } from "@/utils/cn";
import { ComponentProps, PropsWithChildren } from "react";

type Props = ComponentProps<"button"> &
  PropsWithChildren<{
    type?: "button" | "submit" | "reset";
    className?: string;
  }>;

function Button({ type, children, className, ...props }: Props) {
  return (
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
  );
}

export default Button;
