import { cn } from "@/utils/cn";

type Props = {
  className?: string;
};

const Skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Git",
  "React",
  "Next.js",
  "TailwindCSS",
  "TypeScript",
  "Figma",
  "SQL",
];

function SkillsSection({ className }: Props) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 p-4",
        className
      )}
    >
      {Skills.map((skill, index) => (
        <div
          key={index}
          className="flex items-center justify-center text-center aspect-square w-full max-w-[8rem] rounded-lg bg-secondary-900/12 mx-auto"
        >
          {skill}
        </div>
      ))}
    </div>
  );
}

export default SkillsSection;
