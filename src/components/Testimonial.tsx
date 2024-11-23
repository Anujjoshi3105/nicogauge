"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { testimonials } from "@/data/data";
import Image from "next/image";

interface cardProps {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
}
const Card = ({ name, title, description, imageUrl }: cardProps) => {
  return (
    <div className="border-2 border-primary m-2 p-5 group relative cursor-pointer overflow-hidden bg-primary pt-10 pb-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl mx-auto sm:max-w-sm rounded-lg sm:px-10">
      <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-background transition-all duration-300 group-hover:scale-[20]"></span>
      <div className="relative z-10 mx-auto max-w-lg">
        <span className="grid h-20 w-20 place-items-center rounded-full bg-color4 transition-all duration-300 group-hover:bg-color2">
          <Image
            src={imageUrl}
            alt={name}
            width={100}
            height={100}
            className="h-20 w-20 text-white rounded-full transition-all filter filter-invert"
          />
        </span>
        <div className="pt-4 text-base text-background transition-all duration-300">
          <div className="group-hover:text-primary">
            <p className="uppercase font-[750]">{name}</p>
            <p>{title}</p>
          </div>
          <p className="pt-4 group-hover:text-white">{description}</p>
        </div>
      </div>
    </div>
  );
};
export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const handlePrev = () => {
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <div className="">
      <header className="space-y-1 font-bold text-center">
        <h4 className="text-lg text-primary">Proud To Present</h4>
        <h2 className="text-4xl sm:text-5xl">Testimonial</h2>
      </header>
      <motion.div
        className="w-full max-w-3xl mx-auto px-4 py-8"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}>
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-none w-full">
                <Card
                  key={index}
                  name={testimonial.name}
                  title={testimonial.title}
                  description={testimonial.description}
                  imageUrl={testimonial.imageUrl}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center mt-4 gap-4 md:gap-8">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrev}
            className="rounded-full "
            aria-label="Previous testimonial">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === activeIndex ? "bg-primary" : "bg-primary/20"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={handleNext}
            aria-label="Next testimonial">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
