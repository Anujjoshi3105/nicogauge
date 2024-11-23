"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LinkButton } from "./ui/linkButton";

export default function Hero() {
  const subheadingVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut", delay: 0.2 },
    },
  };

  const linkVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut", delay: 0.4 },
    },
  };

  return (
    <section className="relative flex flex-col justify-center items-center h-[60vh] md:h-[80vh] w-full text-center">
      <Image
        src="/nurse.svg"
        alt="Nurse"
        width={1000}
        height={1000}
        className="absolute md:-left-32 -left-10 -z-10 w-[40%] opacity-10 top-32"
      />
      <Image
        src="/doctor.svg"
        alt="doctor"
        width={1000}
        height={1000}
        className="absolute md:-right-28 -right-10 top-4 -z-10 w-[40%] opacity-10"
      />

      {/* Animated Heading */}
      <motion.h1
        id="hero-heading"
        className="group relative lg:text-8xl md:text-7xl sm:text-6xl text-4xl font-extrabold text-nowrap"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}>
        <span className="absolute inset-1 opacity-20 text-primary">
          NicoGauge
        </span>
        <span className="text-primary">Nico</span>Gauge
      </motion.h1>

      {/* Animated Subheading */}
      <motion.h3
        id="hero-subheading"
        className="md:text-2xl sm:text-xl my-4"
        initial="hidden"
        animate="visible"
        variants={subheadingVariants}>
        Unlock the Science of Behavior — Discover Your Neuromarketing Index
      </motion.h3>

      {/* Animated Link */}
      <motion.div
        id="hero-link"
        className="mt-10"
        initial="hidden"
        animate="visible"
        variants={linkVariants}>
        <LinkButton href="/form">Get Started</LinkButton>
      </motion.div>
    </section>
  );
}
