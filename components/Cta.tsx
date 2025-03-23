import React from "react";
import Button from "./Button";

const Cta = () => {
  return (
    <div className="relative py-12 px-6 md:px-16 rounded-sm max-w-6xl mt-20 mx-10 md:mx-10 sm:mx-auto text-center shadow-lg
        bg-[url('/img/hero-bg.png')] bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden">
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-green-600 opacity-80 rounded-lg"></div>

      {/* Content Section */}
      <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12 text-white z-10 p-6 sm:p-8 md:p-10 lg:p-14 rounded-lg">
        
        {/* Text Section */}
        <div className="flex-1 text-center md:text-start">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Your Caregiving Dream <br className="hidden md:block" /> Starts Here
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6">
            Join thousands of successful Care-Pro Academy graduates who have secured
            healthcare jobs abroad. Our internationally recognized caregiver certification,
            expert-led training, and career support will help you achieve your dream of
            working overseas.
          </p>
        </div>

        {/* Button Section - Centered on Mobile */}
        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <Button
            title="Enroll Now"
            id="cta-button"
            containerClass="!bg-[#17426F] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:!bg-[#17428F] transition w-full md:w-auto"
          />
        </div>

      </div>
    </div>
  );
};

export default Cta;
