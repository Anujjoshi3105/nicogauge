"use client";

import Hero from "@/components/Hero";
import Counter from "@/components/Counter";
import FAQ from "@/components/FAQ";
import Testimonial from "@/components/Testimonial";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="space-y-24 md:px-6 lg:px-20 px-4">
      <Hero />
      <Counter />
      <About />
      <FAQ />
      <Testimonial />
    </div>
  );
}
