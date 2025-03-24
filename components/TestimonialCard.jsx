import React from "react";

const TestimonialCard = ({ name, image, text }) => {
  return (
    <div className="relative flex flex-col items-center bg-[#17426F] shadow-lg rounded-xl p-4 sm:p-6 w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
      {/* Image Positioned Halfway Above the Card */}
      <div className="absolute -top-8 sm:-top-10 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-full overflow-hidden border-1 border-white shadow-md">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Testimonial Content */}
      <div className="mt-10 sm:mt-12 flex flex-col items-center text-center">
        <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-green-600">{name}</h3>
        <p className="text-xs sm:text-sm md:text-base text-white italic px-2">{text}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
