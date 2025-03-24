import Button from "@/components/button";
import { cn } from "@/utils/cn";
import { BiDownload } from "react-icons/bi";
import Socials from "./socials";
import TypingAnimation from "./typing-animation";

type Props = {
  className?: string;
};

function HeroIntro({ className }: Props) {
  return (
    <div className={cn("@container", className)}>
      <TypingAnimation
        text="Front-End Developer"
        className="font-light text-[1.25em] -tracking-[0.125em] @xs:text-[1.75em] @sm:text-[2em] @md:text-[2.25rem]"
      />

      <div className="-space-y-[0.5em] flex flex-col justify-center -tracking-[0.25em]">
        <TypingAnimation
          text="Hello I'm"
          className="font-medium text-[2.25em] @xs:text-[2.75em] @sm:text-[3em] @md:text-[3.25em]"
        />

        <TypingAnimation
          text="Sumit Dey"
          delay={0.2}
          className="font-medium text-[3.5em] @xs:text-[4em] @sm:text-[4.25em] @md:text-[4.5em] text-primary-500"
        />
      </div>

      <TypingAnimation
        text="Rendering seamless experiences, one component at a time — because every detail matters!🚀"
        className="font-light italic text-[0.75em] @md:text-[1em] @md:mt-[1em] tracking-normal"
      />

      <div className="max-sm:grid-cols-1 grid grid-cols-[auto_1fr] gap-[1.5em] w-max mt-[1.75em] ml-[0.65em]">
        <Button type="button">
          <span>Download CV</span>
          <BiDownload />
        </Button>

        <Socials delay={0.7} />
      </div>
    </div>
  );
}

export default HeroIntro;
