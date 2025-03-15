import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function to merge Tailwind classes conditionally and resolve conflicts
export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}
