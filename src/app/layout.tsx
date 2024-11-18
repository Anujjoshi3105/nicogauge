import type { Metadata } from "next";
import "./globals.css";
import { Syne } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Nicogauge",
  description:
    "A collaborative project between Symbiosis School of Economics and Delhi Technological University to develop a personalized Neuromarketing Index assessing cigarette addiction through a quiz-based digital platform.",
  keywords:
    "neuromarketing, cigarette addiction, assessment, quiz, website development, DTU, SSE, research collaboration",
  authors: [
    { name: "Ananya Kumar & Rishab Makwana", url: "https://www.sse.edu.in" },
    { name: "Anuj Joshi", url: "https://anujjoshi.netlify.app/" },
  ],
  openGraph: {
    title: "Nicogauge",
    description:
      "A joint project by DTU and SSE to create a digital platform assessing cigarette addiction and neuromarketing tactics.",
    siteName: "Cigarette Addiction Assessment - DTU & SSE",
    images: [
      {
        url: "/icon.svg",
        width: 800,
        height: 600,
        alt: "Cigarette Addiction Assessment Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    title: "Cigarette Addiction Assessment - DTU & SSE",
    description:
      "Collaborative research project by DTU and SSE to assess cigarette addiction through a neuromarketing-based quiz.",
  },
  icons: {
    icon: {
      url: "/icon.svg",
    },
  },
};

const syne = Syne({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`relative ${syne.className} overflow-x-hidden`}>
        <Suspense fallback={<Loading />}>
          <Navbar />
          {children}
          <Footer />
          <div className="w-[80vw] uppercase leading-8 text-center font-extrabold fixed select-none -z-10 left-1/2 translate-x-[-50%] bottom-8 md:bottom-14 opacity-[8%] text-stroke">
            Track smarter, perform better
          </div>
          <Toaster />
        </Suspense>
      </body>
    </html>
  );
}
