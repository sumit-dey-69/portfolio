import { cn } from "@/utils/cn";
import { ReactNode } from "react";
import { BiDownload } from "react-icons/bi";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";

type Props = {
  className?: string;
};

type SocialsType = {
  name: string;
  icon: ReactNode;
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

function HeroIntro({ className }: Props) {
  return (
    <div className={cn("@container", className)}>
      <p className="font-light text-[1.25em] -tracking-[0.125em] @xs:text-[1.75em] @sm:text-[2em] @md:text-[2.25rem]">
        Front-End Developer
      </p>
      <div className="-space-y-[0.5em] -tracking-[0.25em]">
        <p className="font-medium text-[2.25em] @xs:text-[2.75em] @sm:text-[3em] @md:text-[3.25em]">
          Hello I&apos;m
        </p>
        <p className="font-medium text-[3.5em] @xs:text-[4em] @sm:text-[4.25em] @md:text-[4.5em] text-primary-500">
          Sumit Dey
        </p>
      </div>
      <div className="font-light italic text-[0.75em] @md:text-[1em] @md:mt-[1em] tracking-normal">
        <p>Rendering seamless experiences, one component at a time</p>
        <p>— because every detail matters!🚀</p>
      </div>

      <div className="grid grid-cols-[auto_1fr] gap-[1.5em] w-max mt-[1.75em] ml-[0.65em]">
        <button
          type="button"
          className="@max-md:hidden hover:text-white p-[0.5em] font-bold text-sm tracking-normal flex items-center gap-[0.5em] border-[0.15em] bg-primary-500 hover:bg-primary-500/80 border-secondary-500/50 hover:border-primary-500 rounded-md cursor-pointer"
        >
          Download CV
          <BiDownload className="" />
        </button>

        <div className="flex gap-[0.95em] items-center">
          {socials.map((social, index) => (
            <a
              key={`${social.name}-${index}`}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="*:size-[1.25em] *:opacity-30 *:hover:opacity-70 *:cursor-pointer"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroIntro;
