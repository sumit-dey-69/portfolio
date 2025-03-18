import HeroSection from "./components/hero-section";
import TypewriterText from "./components/type-writer-effect";

function Home() {
  return (
    <div className="m-auto size-full max-w-[75rem] @container grid grid-rows-[0.8fr_0.2fr] gap-10">
      <HeroSection />
      <TypewriterText
        className="text-2xl italic"
        words={["Developer", "Student", "Designer"]}
      />
    </div>
  );
}

export default Home;
