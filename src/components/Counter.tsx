"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cardData } from "@/data/data";

interface CardProps {
  label: string;
  endValue: number;
  duration: number;
}

const Card = ({ label, endValue, duration }: CardProps) => {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isAnimating) return;

    const interval = setInterval(() => {
      setCount((prev) =>
        Math.min(prev + Math.ceil(endValue / (duration * 60)), endValue)
      );
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [endValue, duration, isAnimating]);

  return (
    <motion.div
      className="font-bold p-4 md:p-8 lg:p-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={() => setIsAnimating(true)}>
      <div className="text-4xl md:text-5xl mb-2">{count}+</div>
      <div className="text-lg">{label}</div>
    </motion.div>
  );
};

export default function Counter() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center bg-primary text-background rounded-lg">
      {cardData.map((card, index) => (
        <Card
          key={index}
          label={card.label}
          endValue={card.endValue}
          duration={card.duration}
        />
      ))}
    </section>
  );
}
