"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
}

const videos: Video[] = [
  { id: "1", title: "Training Session", thumbnail: "/img/video1.jpg", url: "https://www.youtube.com/embed/example1" },
  { id: "2", title: "Caregiver Workshop", thumbnail: "/img/video2.jpg", url: "https://www.youtube.com/embed/example2" },
  { id: "3", title: "Student Testimonial", thumbnail: "/img/video3.jpg", url: "https://www.youtube.com/embed/example3" },
  { id: "4", title: "Hands-on Training", thumbnail: "/img/video4.jpg", url: "https://www.youtube.com/embed/example4" },
];

const VideoGallery: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="bg-[#17426F] text-white py-20 px-6 sm:px-10 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold sm:text-4xl text-center text-white tracking-wide mb-14">
            What Our Students Are Saying
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
          {videos.map((video) => (
            <SwiperSlide
              key={video.id}
              className="group relative rounded-xl bg-[#1e3a5f] overflow-hidden border border-[#2d4a6a] shadow-md transition-all duration-300 hover:shadow-xl hover:border-green-400"
            >
              <div
                className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] cursor-pointer"
                onClick={() => setSelectedVideo(video.url)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="object-cover w-full h-full rounded-xl transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-3xl font-bold">▶</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Lightbox (Modal) */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative w-[90%] max-w-[800px]">
            <button
              className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300"
              onClick={() => setSelectedVideo(null)}
            >
              &times;
            </button>
            <iframe
              src={selectedVideo}
              title="Video"
              className="w-full h-[60vh] rounded-lg shadow-lg"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoGallery;
