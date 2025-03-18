import Image from "next/image";

function HeroImage() {
  return (
    <div className="flex justify-center items-center relative">
      <div className="h-auto aspect-square max-w-[20em] w-full rounded-full blur-xs bg-secondary-700/50"></div>
      <Image
        src="/picture.webp"
        alt="Profile Picture"
        width={400}
        height={400}
        className="h-auto aspect-square max-w-[20em] w-full rounded-full absolute"
      />
    </div>
  );
}

export default HeroImage;
