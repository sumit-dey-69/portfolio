import HeroImage from "./hero-image";
import HeroIntro from "./hero-intro";

function HeroSection() {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 place-content-center items-center">
      <HeroIntro />
      <HeroImage />
    </div>
  );
}

export default HeroSection;
