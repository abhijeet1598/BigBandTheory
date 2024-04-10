"use client";
import React from "react";
import courseData from "../../data/music_courses.json";
import { BackgroundGradient } from "../ui/background-gradient";
import Link from "next/link";

interface Course {
  id: Number;
  title: String;
  slug: String;
  description: String;
  price: Number;
  instructor: String;
  isFeatured: Boolean;
}

const FeaturedCourses = () => {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-12">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-wide uppercase">
          Featured Courses
        </h1>
        <h2 className="mt-4 text-xl leading-8 tracking-tight text-white sm:text-2xl">
          Learn with some best mentors from the industry
        </h2>
      </div>
      <div className="mt-10 md:mt-24 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => {
            return (
              <div key={`${course.id}`}>
                <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                  <div className="p-4 sm:p-1 flex flex-col items-center text-center flex-grow">
                    <p className="text-lg sm:text-xl text-black mt-2 mb-2 dark:text-neutral-200">
                      {course.title}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                      {course.description}
                    </p>
                    <Link href={`/courses/${course.slug}`}>
                      <button className="p-[2px] relative mt-8">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                          Learn More
                        </div>
                      </button>
                    </Link>
                  </div>
                </BackgroundGradient>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourses;
