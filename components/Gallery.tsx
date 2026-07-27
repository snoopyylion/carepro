"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { motion } from "framer-motion";


const images = [
  { src: "/images/carepro.jpeg", alt: "Care-Pro Academy Training 1" },
  { src: "/images/carepro-1.jpeg", alt: "Care-Pro Academy Training 2" },
  { src: "/images/carepro-2.jpeg", alt: "Care-Pro Academy Training 3" },
  { src: "/images/carepro-3.jpeg", alt: "Care-Pro Academy Training 4" },
  { src: "/images/carepro-4.jpeg", alt: "Care-Pro Academy Training 5" },
  { src: "/images/carepro-5.jpeg", alt: "Care-Pro Academy Training 6" },
  { src: "/images/carepro-6.jpeg", alt: "Care-Pro Academy Training 7" },
  { src: "/images/carepro-7.jpeg", alt: "Care-Pro Academy Training 8" },
  { src: "/images/carepro-8.jpeg", alt: "Care-Pro Academy Training 9" },
  { src: "/images/carepro-9.jpeg", alt: "Care-Pro Academy Training 10" },
  { src: "/images/carepro-10.jpeg", alt: "Care-Pro Academy Training 11" },
  { src: "/images/carepro-11.jpeg", alt: "Care-Pro Academy Training 12" },
  { src: "/images/carepro-12.jpeg", alt: "Care-Pro Academy Training 13" },
];


const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImage = (src: string) => setSelectedImage(src);
  const closeImage = () => setSelectedImage(null);

  return (
    <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    className="bg-[#17426F] text-white mt-5 py-20 px-6 sm:px-10 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }} 
        className="text-3xl font-bold sm:text-4xl text-center text-white tracking-wide mb-14">Our Gallery
        </motion.h2>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-12"
        >
          {images.map((image, index) => (
            <SwiperSlide
            key={index}
            className="group relative rounded-xl bg-[#1e3a5f] overflow-hidden border border-[#2d4a6a] shadow-md transition-all duration-300 hover:shadow-xl hover:border-green-400"
          >
            <div
              className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] cursor-pointer"
              onClick={() => openImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover rounded-xl transform transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 25vw"
                priority
              />
            </div>
          </SwiperSlide>
          
          ))}
        </Swiper>
      </div>

      {/* Lightbox (Modal) */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4"
          onClick={closeImage}
        >
          <div className="relative w-[80%] max-w-[500px]">
            <button
              className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300"
              onClick={closeImage}
            >
              &times;
            </button>
            <Image
              src={selectedImage}
              alt="Expanded"
              width={500}
              height={350}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Gallery;
