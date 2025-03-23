"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const images = [
  { src: "/img/aboutimg.png", alt: "Project 1" },
  { src: "/img/herooimg.png", alt: "Project 2" },
  { src: "/img/whyimg.png", alt: "Project 3" },
  { src: "/img/malenurse.png", alt: "Project 4" },
  { src: "/img/herooimg.png", alt: "Project 2" },
  { src: "/img/whyimg.png", alt: "Project 3" },
];

const Gallery = () => {
  return (
    <section className="bg-[#17426F] text-white py-16 px-4 sm:px-10 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-green-600 text-center mb-10">
          Gallery
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            480: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-10 "
        >
          {images.map((image, index) => (
            <SwiperSlide 
            key={index} 
            className="relative group bg-gray-800 border-[4px] border-gray-600 
                       py-6 px-5 rounded-2xl shadow-lg transition-all duration-500 
                       hover:border-green-700 hover:shadow-xl hover:bg-gradient-to-br 
                       hover:from-gray-700 hover:to-gray-900"
          >
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] 
                            rounded-lg overflow-hidden shadow-lg">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover rounded-lg transform transition-transform 
                           duration-500 group-hover:scale-105"
                sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 25vw"
                priority
              />
            </div>
          </SwiperSlide>
          
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
