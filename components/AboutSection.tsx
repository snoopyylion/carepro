"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface AboutSectionProps {
  title: string;
  text: string;
  imgSrc: string;
  reverse?: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ title, text, imgSrc, reverse }) => {
  return (
    <motion.div
      className={`about-section flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12 px-6 sm:px-12 md:px-16 lg:px-20 py-12`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Text Section */}
      <div className="text-section md:w-1/2 space-y-6 text-center md:text-left">
        <motion.h1 
          className="text-3xl sm:text-4xl font-bold text-green-600"
          initial={{ x: reverse ? 50 : -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-gray-700 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          {text}
        </motion.p>
      </div>

      {/* Image Section */}
      <motion.div
        className="image-section md:w-1/2 flex justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <Image
          src={imgSrc}
          alt={title}
          width={500}
          height={400}
          className="rounded-2xl shadow-lg"
          priority
        />
      </motion.div>
    </motion.div>
  );
};

export default AboutSection;
