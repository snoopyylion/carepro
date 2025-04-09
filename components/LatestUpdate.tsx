import Image from 'next/image';
import React from 'react';
import Button from './Button';

const LatestUpdate = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-green-600 tracking-wide mb-12">
        Latest Update
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto">
        {/* Image */}
        <div className="md:w-1/2 w-full flex justify-center">
          <Image
            src="/img/latestupdate.png"
            alt="Latest Update"
            width={500}
            height={500}
            className="w-full max-w-sm sm:max-w-md md:max-w-full h-auto object-contain"
          />
        </div>
        {/* Text and CTA */}
        <div className="md:w-1/2 w-full text-center md:text-left space-y-6">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Join our next class on <b>April 14, 2025</b>, and take the first step towards a rewarding career in healthcare.
          </p>
          <div className="flex justify-center md:justify-start">
            <Button
                title="Enroll Now"
                id="cta-button"
                href="https://wa.me/2348125444216"
                containerClass="bg-[#17426F] text-white px-5 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg text-sm sm:text-base md:text-lg font-semibold hover:!bg-[#17428F] transition w-full md:w-auto"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default LatestUpdate;
