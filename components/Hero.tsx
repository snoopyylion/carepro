import React from 'react';
import Button from './Button';

const Hero = () => {
  return (
    <div
      className="hero-container relative flex items-center justify-center px-4 sm:px-6 md:px-10 
                 bg-[url('/img/hero-bg.png')] bg-cover bg-center sm:p-0 p-50"
    >
      {/* Overlay to improve text readability */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-80 -z-10"></div>

      <div className="hero-content flex flex-col-reverse md:flex-row items-center gap-10 max-w-7xl w-full relative z-10">
        
        {/* Left Side */}
        <div className="hero-left w-full md:w-2/3 flex flex-col text-center md:text-left space-y-4 text-white">
          <p className="font-medium text-lg">Welcome to Care-Pro Academy</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Get A <span className="text-green-400">Caregiver</span> Certificate <br className="hidden md:block" /> And Japa With Ease
          </h2>
          <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
            Our internationally recognized training equips you with the skills,<br className="hidden md:block" />
            knowledge, and certification you need to work in top healthcare facilities worldwide.
          </p>
          <div className="flex justify-center md:justify-start">
          <Button id='Enrol Now' title='Enrol Now' containerClass='!bg-[#75BB74] flex-center'/>
          </div>
        </div>

        {/* Right Side - Images */}
        <div className="hero-right hidden w-full md:w-1/3 sm:flex justify-center md:justify-end relative">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md flex justify-end pr-0 md:pr-6">
            <img
              src="/img/malenurse.png"
              alt="Male Nurse"
              className="relative w-[85%] sm:w-[90%] md:w-[100%] drop-shadow-lg"
            />
            <img
              src="/img/frontnurse.png"
              alt="Front Nurse"
              className="absolute bottom-0 left-20 sm:left-38 md:left-56 w-[60%] sm:w-[65%] md:w-[85%] drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
