"use client";

import AboutSection from "@/components/AboutSection";
import AboutText from "@/components/AboutText";
import Testimonials from "@/components/Testimonials";
import VideoGallery from "@/components/VideoGallery";
import { motion } from "framer-motion";

const page = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Title */}
      <motion.div 
        className="about-title mt-20 flex justify-center items-center py-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-green-600">
          About Care-Pro Academy
        </h2>
      </motion.div>

      {/* Sections */}
      <AboutSection 
        title="Enriching Lives" 
        text="Welcome to Care-Pro Academy, a premier healthcare training institution based in Lagos, specializing in assistant healthcare and careworker training..."
        imgSrc="/img/aboutimg.png"
        reverse
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <AboutText text="At Carepro Academy, we offer internationally recognized healthcare training certificates, ensuring our students gain the necessary skills and qualifications..." />
      </motion.div>

      <AboutSection 
        title="Our Vision" 
        text="To redefine caregiving through education, shaping a new generation of globally certified and compassionate professionals."
        imgSrc="/img/aboutimg.png"
      />

      <AboutSection 
        title="Our Mission" 
        text="To train caregivers with cutting-edge methodologies, hands-on experience, and globally recognized certifications..."
        imgSrc="/img/aboutimg.png"
        reverse
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <AboutText text="With expert instructors, modern facilities, and a focus on global standards, Carepro Academy is dedicated to developing competent healthcare professionals..." />
      </motion.div>

      <Testimonials />

      <motion.div
        className="about-video-gallery py-10"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <VideoGallery />
      </motion.div>
    </motion.div>
  );
};

export default page;
