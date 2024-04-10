"use client";
import React from "react";
import { WavyBackground } from "../ui/wavy-background";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import instructorsData from "../../data/instructors.json";

const Instructors = () => {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h1 className="text-2xl md:text-4xl lg:text-7xl text-center font-bold text-white mb-4">
          Meet Our Instructors
        </h1>
        <div className="flex items-center justify-center w-full">
          <AnimatedTooltip items={instructorsData.instructors} />
        </div>
      </WavyBackground>
    </div>
  );
};

export default Instructors;
