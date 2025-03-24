import HeroImage from "./components/hero-image";
import HeroIntro from "./components/hero-intro";
import TypingAnimation from "./components/typing-animation";

function Home() {
  return (
    <div className="m-auto size-full max-w-[75rem] @container grid grid-rows-[0.8fr_0.2fr] gap-10">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 @md:place-content-center @container">
        <HeroIntro />
        <HeroImage />
      </div>

      <TypingAnimation
        className="text-center text-xl opacity-75 italic"
        text="A *Developer who loves *Designs and *Learning"
        delay={0.05}
      />
    </div>
  );
}

export default Home;
