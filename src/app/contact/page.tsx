"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function Component() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-2xl p-6 mx-auto h-screen flex flex-col justify-center">
      <Image
        src="/support.svg"
        alt="Support"
        width={1000}
        height={1000}
        className="hidden md:block absolute -left-20 -z-10 w-1/2 opacity-10 translate-y-20"
      />
      <Image
        src="/influencer.svg"
        alt="Influencer"
        width={1000}
        height={1000}
        className="hidden md:block absolute -right-20 -translate-y-20 -z-10 w-1/2 opacity-10"
      />
      <h1 className="text-3xl md:text-5xl sm:text-4xl font-extrabold text-center mb-2">
        Get in Touch
      </h1>
      <p className="text-center text-primary mb-8">
        Have a question or want to work together? Fill out the form below.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Name
            </label>
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white text-background"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white text-background"
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-semibold mb-2">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            className="w-full min-h-[150px] bg-white text-background"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-primary hover:opacity-90 active:scale-95  text-background">
          Submit
        </Button>
      </form>
    </div>
  );
}
