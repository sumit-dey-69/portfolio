import LeftSection from "@/components/resume/left-section";
import RightSection from "@/components/resume/right-section";

function ResumePage() {
  return (
    <div className="grid md:grid-cols-[0.4fr_0.6fr] space-x-20 gap-10">
      <LeftSection />
      <RightSection />
    </div>
  );
}

export default ResumePage;
