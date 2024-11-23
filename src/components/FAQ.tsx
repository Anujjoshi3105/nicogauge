"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQItems } from "@/data/data";

type FAQItem = {
  question: string;
  answer: string;
};

const animationVariants = {
  hidden: (direction: "left" | "right") => ({
    opacity: 0,
    x: direction === "left" ? -100 : 100,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 150,
    },
  },
};

export default function FAQ({ faqItems = FAQItems }: { faqItems?: FAQItem[] }) {
  return (
    <section className="max-w-4xl mx-auto my-12 px-4 space-y-6 md:space-y-12">
      <header className="space-y-1 text-center font-bold ">
        <h4 className="text-lg text-primary">
          Explore Commonly Asked Questions
        </h4>
        <h2 className="text-3xl sm:text-5xl">Frequently Asked Questions</h2>
      </header>
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => {
          const direction = index % 2 === 0 ? "left" : "right";
          return (
            <AccordionItem key={index} value={`item-${index}`}>
              <motion.div
                custom={direction}
                initial="hidden"
                whileInView="visible"
                variants={animationVariants}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </motion.div>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
}
