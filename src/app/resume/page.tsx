import LeftSection from "@/components/resume/left-section";
import RightSection from "@/components/resume/right-section";

function ResumePage() {
  return (
    <div className="grid max-w-[75rem] mx-auto grid-cols-1 md:grid-cols-[0.4fr_0.6fr] space-x-20 gap-20">
      <LeftSection />
      <RightSection />
    </div>
  );
}

export default ResumePage;
