"use client";
import React, { useState } from "react";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
  { id: 1, name: "Grace Adekunle", image: "/img/test1.png", text: "“Care-Pro Academy gave me the skills and certification I needed to secure a caregiver job in Canada. The training was top-notch, and the instructors were incredibly supportive. I’m now living my dream abroad!" },
  { id: 2, name: "Toyin Odegbams", image: "/img/test2.png", text: "The hands-on training at Care-Pro Academy was exactly what I needed. It prepared me for real-life caregiving situations and made my transition into the healthcare sector seamless. I highly recommend it!" },
  { id: 3, name: "Michael Yusuf", image: "/img/test3.png", text: "Care-Pro Academy not only provided me with a quality education but also guided me through the process of securing a job overseas. If you’re serious about relocating through caregiving, this is the right place!" },
  { id: 4, name: "John Benson", image: "/img/test4.png", text: "The trainers at Care-Pro Academy go beyond just teaching. They prepare you for the real world. Their step-by-step guidance helped me transition into a caregiver role in the UK with ease" },
  { id: 5, name: "Joshua Tam", image: "/img/test5.png", text: "I didn’t just get a certificate; I got a career path." },
  { id: 6, name: "Belle Sumebo", image: "/img/test6.png", text: "I never knew caregiving could be a pathway to a better future until I joined Care-Pro Academy. The training was detailed, and the opportunities are endless." },
  { id: 7, name: "Tifase Oluwaseyi", image: "/img/test1.png", text: "Very professional and well organized!" },
  { id: 8, name: "Thomas Susan", image: "/img/test5.png", text: "Exceeded my expectations. 5 stars!" },
];

const itemsPerPage = 6;

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(testimonialsData.length / itemsPerPage);

  // Slice data based on pagination
  const paginatedTestimonials = testimonialsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="py-12 bg-white mt-20">
      <div className="max-w-6xl mx-auto text-center px-4">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-green-600 mb-20">Testimonials</h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {paginatedTestimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              image={testimonial.image}
              text={testimonial.text}
            />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-8 gap-4 sm:gap-6">
        <button
            className={`px-4 sm:px-6 py-2 bg-[#17426F] text-white rounded-lg transition-all duration-300 
            ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#20507B]"}
            text-sm sm:text-base`}
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
        >
            Prev
        </button>

        <span className="text-base sm:text-lg font-semibold">
            {currentPage} / {totalPages}
        </span>

        <button
            className={`px-4 sm:px-6 py-2 bg-[#17426F] text-white rounded-lg transition-all duration-300 
            ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-[#20507B]"}
            text-sm sm:text-base`}
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
        >
            Next
        </button>
        </div>

      </div>
    </div>
  );
};

export default Testimonials;
