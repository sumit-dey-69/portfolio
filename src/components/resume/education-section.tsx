import { cn } from "@/utils/cn";

type Props = {
  className?: string;
};

type EducationType = {
  institution: string;
  course: string;
  startDate: number;
  endDate?: number;
};
const Education: EducationType[] = [
  {
    institution: "Bodoland University",
    course: "BA Economics",
    startDate: 2022,
  },
  {
    institution: "Kokrajhar Govt. College",
    course: "AHSEC",
    startDate: 2020,
    endDate: 2022,
  },
  {
    institution: "BPCM BabyLand Eng Med High School",
    course: "HSLC",
    startDate: 2008,
    endDate: 2020,
  },
  {
    institution: "District Computer Centre",
    course: "Computer Application",
    startDate: 2020,
    endDate: 2021,
  },
];

function EducationSection({ className }: Props) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-4 p-4", className)}>
      {Education.map((education, index) => (
        <div
          key={index}
          className="flex flex-col space-y-[0.5em] py-[1.25em] px-[2em] aspect-video w-full max-w-[25rem] rounded-lg bg-secondary-900/12 mx-auto"
        >
          <span className="text-primary-300 text-[1.2em] font-light">
            {education.startDate}-{education.endDate ?? "Present"}
          </span>
          <div className="ml-[0.45em] flex flex-col space-y-[0.75em]">
            <span className="text-[1.25em]">{education.institution}</span>
            <li className="text-[1em] font-light ml-[0.5em]">
              {education.course}
            </li>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EducationSection;
