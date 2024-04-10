"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import musicContentData from "../../data/music_content.json";

const WhyChooseUs = () => {
  return (
    <div className="pt-12">
      <h1 className="text-center text-3xl md:text-4xl font-semibold tracking-wide uppercase">
        Why Choose Us?
      </h1>
      <div className="mt-8">
        <StickyScroll content={musicContentData.musicSchoolContent} />
      </div>
    </div>
  );
};

export default WhyChooseUs;
