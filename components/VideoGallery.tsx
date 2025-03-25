"use client";

import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

interface Video {
  id: string;
  title: string;
  url: string;
  thumbnail?: string;
}

const videos: Video[] = [
  { id: "1", title: "Video", url: "/vid/vid1.mp4" },
  { id: "2", title: "Video 1", url: "/vid/vid2.mp4" },
  { id: "3", title: "Video 2", url: "/vid/vid3.mp4" },
  { id: "5", title: "Video 4", url: "/vid/vid5.mp4" },
  { id: "6", title: "Video 5", url: "/vid/vid6.mp4" },
  { id: "7", title: "Video 6", url: "/vid/vid7.mp4" },
];

const VideoGallery: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [videoThumbnails, setVideoThumbnails] = useState<{ [key: string]: string }>({});
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  useEffect(() => {
    videos.forEach((video) => {
      const videoElement = document.createElement("video");
      videoElement.src = video.url;
      videoElement.crossOrigin = "anonymous";
      videoElement.preload = "metadata";

      videoElement.onloadeddata = () => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        if (context) {
          canvas.width = 320;
          canvas.height = 180;
          context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
          const thumbnailUrl = canvas.toDataURL("image/png");
          setVideoThumbnails((prev) => ({ ...prev, [video.id]: thumbnailUrl }));
        }
      };

      videoRefs.current[video.id] = videoElement;
    });
  }, []);

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
                {/* Video Thumbnail or Placeholder */}
                <img
                  src={videoThumbnails[video.id] || "/default-thumbnail.jpg"}
                  alt={video.title}
                  className="object-cover w-full h-full rounded-xl transform transition-transform duration-500 group-hover:scale-105"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

                {/* Video Title */}
                <div className="absolute bottom-4 left-4 right-4 text-white font-semibold text-lg sm:text-xl">
                  {video.title}
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-4xl font-bold bg-black bg-opacity-50 px-5 py-3 rounded-full">
                    ▶
                  </span>
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
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full h-[60vh] rounded-lg shadow-lg"
            ></video>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoGallery;
