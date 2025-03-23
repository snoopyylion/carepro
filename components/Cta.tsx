import React from "react";
import Button from "./Button";

const Cta = () => {
  return (
    <div className="relative py-10 sm:py-12 px-4 sm:px-6 md:px-12 lg:px-16 max-w-6xl mt-16 sm:mt-20 mx-4 sm:mx-6 md:mx-10 lg:mx-auto text-center shadow-lg
        bg-[url('/img/hero-bg.png')] bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden">
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-green-600 opacity-80 rounded-lg"></div>

      {/* Content Section */}
      <div className="relative flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12 text-white z-10 p-4 sm:p-6 md:p-10 lg:p-14 rounded-lg">
        
        {/* Text Section */}
        <div className="flex-1 text-center md:text-start">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-snug sm:leading-tight">
            Your Caregiving Dream <br className="hidden md:block" /> Starts Here
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-normal mb-4 sm:mb-6">
            Join thousands of Care-Pro Academy graduates who have secured
            healthcare jobs abroad. Our globally recognized certification and expert-led training 
            will help you achieve your dream of working overseas.
          </p>
        </div>

        {/* Button Section - Centered on Mobile */}
        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <Button
            title="Enroll Now"
            id="cta-button"
            containerClass="!bg-[#17426F] text-white px-5 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg text-sm sm:text-base md:text-lg font-semibold hover:!bg-[#17428F] transition w-full md:w-auto"
          />
        </div>

      </div>
    </div>
  );
};

export default Cta;
