import { cn } from "@/utils/cn";
import { CSSProperties } from "react";

type Props = {
  words: string[];
  className?: string;
};

function TypewriterText({ words, className }: Props) {
  return (
    <div
      className={cn(
        "typewriter-container tracking-normal mx-auto font-bold gap-[0.5em]",
        className
      )}
    >
      <div className="flex items-center gap-[0.5em]">
        <span>I&apos;m a</span>
        <div className="w-[5.5em]">
          {words.map((word, index) => (
            <span
              className="typewriter-content"
              key={`${word}-${index}`}
              style={{ "--i": words.length - index } as CSSProperties}
              data-text={word}
              aria-hidden="true"
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TypewriterText;
