import { motion } from "framer-motion";
import Link from "next/link";

interface BannerProps {
  image: string;
  title: string;
  subtitle: string;
  link?: string;
  tag?: string;
  reverse?: boolean;
}

export default function Banner({
  image,
  title,
  subtitle,
  tag = "",
  link,
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
    <section className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0">
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
          className="w-[400px] md:w-[600px] h-full object-cover"
        />
      </div>
      {/* Text Section */}
      <div className="flex flex-col justify-center text-center md:text-left lg:max-w-1/3">
        {tag && (
          <motion.p
            variants={SlideUp(0.2)}
            initial="hidden"
            whileInView="visible"
            className="font-semibold capitalize mb-2">
            {tag}
          </motion.p>
        )}
        <motion.p
          variants={SlideUp(0.4)}
          initial="hidden"
          whileInView="visible"
          className="text-2xl sm:text-4xl font-[800] text-primary capitalize mb-8">
          {title}
        </motion.p>
        <motion.p
          variants={SlideUp(0.6)}
          initial="hidden"
          whileInView="visible"
          className="text-lg">
          {subtitle}
        </motion.p>
        <motion.div
          variants={SlideUp(0.8)}
          initial="hidden"
          whileInView="visible"
          className="flex justify-center md:justify-start my-6">
          {link && (
            <Link
              href={link}
              className="font-semibold text-background bg-primary hover:scale-105 duration-150 rounded-full px-6 py-2">
              Get Started
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
