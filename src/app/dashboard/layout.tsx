"use client";

import Navbar from "@/components/dashboard/Navbar";
import Sidebar from "@/components/dashboard/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-y-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
