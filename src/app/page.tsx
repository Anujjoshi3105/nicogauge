"use client";
import Hero from "@/components/Hero";
import Counter from "@/components/Counter";
import FAQ from "@/components/FAQ";
import Testimonial from "@/components/Testimonial";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="space-y-12 md:space-y-20 md:p-12 px-4">
      <Hero />
      <Counter />
      <About />
      <Testimonial />
      <FAQ />
    </div>
  );
}
