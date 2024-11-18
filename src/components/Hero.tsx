"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
    <section
      id="hero"
      className="section hero flex flex-col justify-center items-center h-[90vh] w-full text-center">
      <div>
        {/* Animated Heading */}
        <motion.h1
          id="hero-heading"
          className="relative lg:text-8xl md:text-7xl sm:text-6xl text-4xl font-extrabold text-nowrap"
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
          <Link
            href="/form"
            passHref
            className="relative inline-block group focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-1 translate-y-1 bg-primary group-hover:bg-primary group-hover:translate-y-0.5 group-hover:translate-x-0.5 "></span>
            <span className="relative block px-6 py-3 bg-background font-bold group-hover:bg-white/10 group-hover:text-background text-sm border border-primary">
              Get Started
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
