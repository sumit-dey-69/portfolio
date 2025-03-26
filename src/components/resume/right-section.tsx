"use client";
import { useActiveTab } from "@/zustand/resume-tab-state";
import { JSX } from "react";
import AboutSection from "./about-section";
import EducationSection from "./education-section";
import ExperienceSection from "./experience-section";
import SkillsSection from "./skills-section";

type SectionsType = {
  title: string;
  component: JSX.Element;
};

const Sections: SectionsType[] = [
  {
    title: "My skills",
    component: <SkillsSection />,
  },
  {
    title: "My Experiences",
    component: <ExperienceSection />,
  },
  {
    title: "My Education",
    component: <EducationSection />,
  },
  {
    title: "About me",
    component: <AboutSection />,
  },
];

function RightSection() {
  const activeIndex = useActiveTab();
  const title = Sections[activeIndex].title;
  const section = Sections[activeIndex].component;
  return (
    <div className="space-y-5">
      <h3 className="text-[1.55em]">{title}</h3>
      <div className="overflow-y-auto h-[calc(100vh-12rem)] no-scrollbar">
        {section}
      </div>
    </div>
  );
}

export default RightSection;
