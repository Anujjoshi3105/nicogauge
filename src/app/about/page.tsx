"use client";
import Banner from "@/components/Banner";

interface BannerProps {
  image: string;
  tag: string;
  title: string;
  subtitle: string;
  link: string;
  reverse: boolean;
}

export default function About() {
  const Banner1: BannerProps = {
    image: "/nurse.svg",
    tag: "TAILORED FOR YOUR JOURNEY",
    title: "Understand Your Addiction, Take Control",
    subtitle:
      "Discover a platform designed to evaluate your cigarette addiction with precision. Gain personalized insights into your habits and receive guidance to empower your journey toward healthier choices. This is your first step towards a smoke-free life.",
    link: "#",
    reverse: false,
  };
  const Banner2: BannerProps = {
    image: "/doctor.svg",
    tag: "INSIGHTS DRIVEN BY NEUROSCIENCE",
    title: "Decode the Impact of Neuromarketing",
    subtitle:
      "Explore how marketing strategies influence your decisions. Our platform equips you with knowledge about the subtle cues and triggers that shape your behavior, helping you make informed choices and reclaim control.",
    link: "#",
    reverse: true,
  };
  const Banner3: BannerProps = {
    image: "/patient.svg",
    tag: "EMPOWERED BY DATA",
    title: "Personalized Guidance for Positive Change",
    subtitle:
      "Using detailed analysis, we provide actionable recommendations tailored to your needs. Whether reducing dependence or quitting entirely, our platform supports you with tools and resources to achieve lasting results.",
    link: "#",
    reverse: false,
  };
  const Banner4: BannerProps = {
    image: "/cleaner.svg",
    tag: "FOCUSED ON YOUR SUCCESS",
    title: "Track Progress, Celebrate Milestones",
    subtitle:
      "Monitor your journey with intuitive tools that highlight your growth and achievements. Stay motivated as you reach key milestones, with support that keeps you aligned with your goals.",
    link: "#",
    reverse: true,
  };

  return (
    <div className="space-y-12 md:space-y-20 md:p-12 px-4">
      <Banner {...Banner1} />
      <Banner {...Banner2} />
      <Banner {...Banner3} />
      <Banner {...Banner4} />
    </div>
  );
}
