import HeroImage from "@/components/home/hero-image";
import HeroIntro from "@/components/home/hero-intro";
import TypingAnimation from "@/components/home/typing-animation";

function Home() {
  return (
    <div className="mx-auto size-full max-w-[75rem] @container grid grid-rows-[auto_auto] items-center space-y-10">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <HeroIntro className="@md:text-xl" />
        <HeroImage className="text-sm" />
      </div>

      <TypingAnimation
        className="text-center text-xl opacity-75 italic"
        text="A *Developer who loves *Designs and *Learning"
        delay={0.05}
        repeat={Infinity}
        repeatDelay={1}
      />
    </div>
  );
}

export default Home;
