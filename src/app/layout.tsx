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
          <Toaster />
        </Suspense>
      </body>
    </html>
  );
}
