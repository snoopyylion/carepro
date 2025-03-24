"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const images = [
  { src: "/img/aboutimg.png", alt: "Project 1" },
  { src: "/img/galleryimg2.png", alt: "Project 2" },
  { src: "/img/whyimg.png", alt: "Project 3" },
  { src: "/img/galleryimg1.png", alt: "Project 4" },
  { src: "/img/galleryimg3.png", alt: "Project 5" },
  { src: "/img/galleryimg2.png", alt: "Project 6" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImage = (src: string) => setSelectedImage(src);
  const closeImage = () => setSelectedImage(null);

  return (
    <section className="bg-[#17426F] text-white py-20 px-6 sm:px-10 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold sm:text-4xl text-center text-white tracking-wide mb-14">Our Gallery
        </h2>

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
                className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] cursor-pointer"
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
    </section>
  );
};

export default Gallery;
