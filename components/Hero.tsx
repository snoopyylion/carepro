"use client"; // Ensures animations work in Next.js App Router
import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      className="hero-container relative flex items-center justify-center px-4 sm:px-6 md:px-10 
                 bg-[url('/img/hero-bg.png')] bg-cover bg-center min-h-screen"
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-blue-950 bg-opacity-80 -z-10"></div>

      <div className="hero-content flex flex-col-reverse md:flex-row items-center max-w-7xl w-full py-10 relative z-10">
        
        {/* Left Side - Text Content */}
        <motion.div 
          className="hero-left w-full md:w-1/2 flex flex-col text-center md:text-left space-y-6 text-white px-4 md:px-0"
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.p 
            className="font-medium font-poppins text-lg sm:text-xl"
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.3 }}
          >
            Welcome to Care-Pro Academy
          </motion.p>
          
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.5 }}
          >
            Get A <span className="text-green-600">Caregiver</span> Certificate <br className="hidden md:block" /> And Japa With Ease
          </motion.h2>
          
          <motion.p 
            className="text-gray-200 text-base sm:text-lg leading-relaxed max-w-lg mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.7 }}
          >
            Our internationally recognized training equips you with the skills,
            knowledge, and certification you need to work in top healthcare facilities worldwide.
          </motion.p>

          <motion.div 
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.9 }}
          >
            <Button id="Enrol Now" title="Enrol Now" containerClass="!bg-green-600 flex-center" />
          </motion.div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div 
          className="hero-right w-full md:w-1/2 flex justify-center md:justify-end px-4"
          initial={{ opacity: 0, x: 50, scale: 0.95 }} 
          animate={{ opacity: 1, x: 0, scale: 1 }} 
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        >
          <div className="relative w-[80%] max-w-[460px] h-auto">
            <Image 
              src="/img/hero-img.png" 
              alt="Caregiver training"
              width={460}
              height={600}
              className="rounded-2xl shadow-xl object-cover"
              priority
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;
