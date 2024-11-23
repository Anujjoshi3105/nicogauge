"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
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
    <div className="max-w-2xl m-6 px-4 mx-auto h-[90vh] flex flex-col justify-center">
      <Image
        src="/support.svg"
        alt="Support"
        width={1000}
        height={1000}
        className="block absolute -left-20 -z-10 w-1/2 opacity-10 translate-y-20"
      />
      <Image
        src="/influencer.svg"
        alt="Influencer"
        width={1000}
        height={1000}
        className="block absolute -right-20 -translate-y-20 -z-10 w-1/2 opacity-10"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
        className="text-center space-y-2 my-8">
        <h1 className="text-3xl md:text-5xl sm:text-4xl font-extrabold">
          Get in Touch
        </h1>
        <p className="text-primary">
          Have a question or want to work together? Fill out the form below.
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        onSubmit={handleSubmit}
        className="space-y-6 text-sm">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="font-semibold">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            className="w-full min-h-[150px]"
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-primary hover:opacity-90 active:scale-95  text-background">
          Submit
        </Button>
      </motion.form>
    </div>
  );
}
