"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import testimonialsData from "../../data/testimonials.json";

const Testimonials = () => {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.2] bg-grid-black/[0.2] items-center justify-center relative overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-4 z-10">
        Hear our Harmony: Voices of success
      </h2>
      <p className="text-xl font-bold text-center mb-8 z-10">
        Hear what our learner said after joining us
      </p>
      <InfiniteMovingCards
        items={testimonialsData.testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
};

export default Testimonials;
