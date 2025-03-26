const Skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "TailwindCSS",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Express",
    "PostgreSQL",
    "MySQL",
    "Git",
    "Figma",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe XD",
    "Adobe After Effects",
    "Adobe Premiere Pro",
    "Adobe Audition",
    "Adobe Audition CC",
    "Adobe Lightroom",
    "Adobe Photoshop CC",
    "Adobe Illustrator CC",
    "Adobe XD CC",
    "Adobe After Effects CC",
    "Adobe Premiere Pro CC",
    "Adobe Audition CC",
    "Adobe Audition CC",
    "Adobe Lightroom CC",
  ];
  
  function SkillsSection() {
    return (
      <div className="space-y-5">
        <h3 className="text-[1.55em]">My skills</h3>
        <div className="grid grid-cols-3 space-y-[2em] px-[0.75em]">
          {Skills.map((skill, index) => (
            <div
              key={index}
              className="size-[10em] flex text-center items-center justify-center rounded-lg bg-secondary-900/12"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default SkillsSection;
  