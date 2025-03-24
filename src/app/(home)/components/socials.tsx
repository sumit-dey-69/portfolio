"use client";
import { cn } from "@/utils/cn";
import { motion } from "motion/react";
import { JSX } from "react";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";

type Props = {
  className?: string;
  delay?: number;
};

type SocialsType = {
  name: string;
  icon: JSX.Element;
  href: string;
};

const socials: SocialsType[] = [
  {
    name: "Github",
    icon: <BsGithub />,
    href: "https://github.com/sumit-dey-69",
  },
  {
    name: "Twitter",
    icon: <BsTwitterX />,
    href: "https://x.com/sumitdey_Dev",
  },
  {
    name: "LinkedIn",
    icon: <BsLinkedin />,
    href: "https://www.linkedin.com/in/sumit-dey-⠀-640700243",
  },
];

function Socials({ className, delay = 0.1 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1, ease: "easeIn" }}
      className={cn("flex gap-[0.95em] items-center", className)}
    >
      {socials.map((social, index) => (
        <motion.a
          key={`${social.name}-${index}`}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="*:size-[1.25em] *:opacity-30 *:hover:opacity-70 *:cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * delay, ease: "easeIn" }}
        >
          {social.icon}
        </motion.a>
      ))}
    </motion.div>
  );
}

export default Socials;
