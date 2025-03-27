"use client"; // Ensures animations work in Next.js App Router
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

const About = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 text-center sm:px-10 md:px-20">
      {/* Heading Animation */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-green-600 leading-tight">
          About <span>Care-Pro Academy</span>
        </h2>
      </motion.div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side - Image Animation */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <Image
            src="/img/aboutimg.png"
            width={500}
            height={500}
            alt="About Care-Pro Academy"
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Right Side - Text Animation */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left"
        >
          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            At CarePro Academy Limited, we empower individuals with skills and 
            certifications to excel in the caregiving profession—both locally and 
            internationally. Our training programs meet global standards, focusing 
            on preparing students for job opportunities abroad, including in Canada 
            and other high-demand regions.
          </p>

          {/* Button Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6"
          >
            <Button title="Learn More" href="/aboutus" containerClass="!bg-green-600 !hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md transition duration-300" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
