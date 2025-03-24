import React from "react";
import Button from "./Button";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div className="py-16 px-0"> 
      <div className="w-full max-w-none">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-600">Contact Us</h2>
        </div>

        {/* Full-width flex container */}
        <div className="flex flex-col md:flex-row w-full h-auto md:h-[90vh] bg-[#17426F] overflow-hidden">
          
          {/* Left Side: Form */}
          <div className="flex-1 flex justify-center items-center p-10 bg-[#17426F]">
            <div className="w-full max-w-lg p-6 sm:p-10 rounded-lg shadow-md bg-white">
              <h2 className="text-2xl font-light text-[#132c46] text-center mb-6">Send A Message</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Type your message"
                  className="w-full p-3 border border-gray-300 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button
                  title="Send Message"
                  id="contact-send"
                  containerClass="w-full bg-blue-950 hover:bg-blue-900 text-white py-3 rounded-lg font-semibold transition-all duration-300"
                />
              </form>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="flex-1 relative w-full h-full">
            <Image
              src="/img/contactimg.png"
              alt="Contact"
              layout="fill"
              objectFit="fit"
              objectPosition="center"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
