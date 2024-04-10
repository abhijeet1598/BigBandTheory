import FeaturedCourses from "@/components/featuredCourses/FeaturedCourses";
import Hero from "@/components/hero/Hero";
import Instructors from "@/components/instructors/Instructors";
import Testimonials from "@/components/testimonials/Testimonials";
import WhyChooseUs from "@/components/whyChooseUs/WhyChooseUs";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] text-white antialiased bg-grid-white/[0.02]">
      {/* <h1 className="text-2xl text-center">Big Band Theory</h1> */}
      <Hero />
      <FeaturedCourses />
      <WhyChooseUs />
      <Testimonials />
      <Instructors />
      <Footer />
    </main>
  );
}
