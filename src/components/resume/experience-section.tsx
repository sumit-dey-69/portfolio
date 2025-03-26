import { cn } from "@/utils/cn";

type Props = {
  className?: string;
};

type ExperienceType = {
  company: string;
  position: string[];
  startDate: number;
  endDate?: number;
};
const Experiences: ExperienceType[] = [
  {
    company: "Deverse",
    position: ["Front-End Developer", "UI/UX Designer"],
    startDate: 2024,
  },
];

function ExperienceSection({ className }: Props) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-4 p-4", className)}>
      {Experiences.map((experience, index) => (
        <div
          key={index}
          className="flex flex-col space-y-[0.35em] py-[1.25em] px-[2em] aspect-video w-full max-w-[25rem] rounded-lg bg-secondary-900/12 mx-auto"
        >
          <span className="text-primary-300 text-[1.2em] font-light">
            {experience.startDate}-{experience.endDate ?? "Present"}
          </span>
          <div className="ml-[0.45em] flex flex-col space-y-[0.25em]">
            <span className="text-[1.5em]">{experience.company}</span>
            <div className="text-[1em] font-light ml-[0.5em]">
              {experience.position.map((position, index) => (
                <li key={index}>{position}</li>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExperienceSection;
