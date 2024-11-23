import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";

interface BannerProps {
  image: string;
  title: string;
  para: string;
  btn?: {
    title: string;
    link: string;
  };
  tag?: string;
  reverse?: boolean;
}

export default function Banner({
  image,
  title,
  para,
  tag,
  btn,
  reverse = false,
}: BannerProps) {
  const SlideUp = (delay: number) => ({
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay },
    },
  });

  return (
    <section className="container grid grid-cols-1 md:grid-cols-2 space-x-6 space-y-6 mx-auto">
      {/* Image Section */}
      <div
        className={`flex justify-center items-center 
              ${reverse && "md:order-last md:justify-end"}`}>
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          src={image}
          alt={`${title} illustration`}
          className=""
        />
      </div>
      {/* Text Section */}
      <div className="flex flex-col justify-center text-center md:text-left">
        {tag && (
          <motion.h4
            variants={SlideUp(0.1)}
            initial="hidden"
            whileInView="visible"
            className="font-semibold capitalize">
            {tag}
          </motion.h4>
        )}
        <motion.h2
          variants={SlideUp(0.1)}
          initial="hidden"
          whileInView="visible"
          className="text-2xl sm:text-4xl font-[800] text-primary capitalize mb-8">
          {title}
        </motion.h2>
        <motion.p
          variants={SlideUp(0.2)}
          initial="hidden"
          whileInView="visible"
          className="text-lg">
          {para}
        </motion.p>
        <motion.div
          variants={SlideUp(0.3)}
          initial="hidden"
          whileInView="visible"
          className="flex justify-center md:justify-start my-8">
          {btn && btn.link && (
            <Button asChild size="rounded">
              <Link href={btn.link}>{btn.title}</Link>
            </Button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
