"use client";
import Button from "@/components/button";
import { cn } from "@/utils/cn";
import { useState } from "react";

const Tabs = ["Skills", "Experience", "Education", "About me"];
function LeftSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-5 overflow-hidden mx-auto">
      <div className="space-y-[0.25em]">
        <h2 className="text-[2.1em] font-normal">Why hire me?</h2>
        <p className="italic font-extralight text-[1.25em]">
          &ldquo;Because I craft fast, seamless, and creative web
          experiences!&rdquo; 🚀
        </p>
      </div>

      <div className="space-y-[1.65em]">
        {Tabs.map((tab, index) => (
          <Button
            key={index}
            type="button"
            text={tab}
            className={cn(
              "flex py-[0.4em] w-full justify-center hover:bg-[#03D3FD] hover:text-black bg-[#00FEFE] text-[#142C62] font-normal border-none text-[1.37em]",
              activeIndex === index && "bg-[#03D3FD] text-black font-medium"
            )}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default LeftSection;
