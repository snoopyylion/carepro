"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF,FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";
import Button from "@/components/Button";
import Cta from "@/components/Cta";
import React from "react";

const page = () => {
  return (
    <div className="contact-us bg-[#f9f9f9] w-full px-6 py-12 md:px-12 mt-20 relative">
      {/* Header & Description */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-600">Contact Us</h2>
        <p className="text-gray-600 mt-2">Any question or remarks? Just write us a message!</p>
      </div>

      {/* Contact Section */}
      <div className="contact-section flex flex-col md:flex-row bg-white rounded-3xl p-12">
        {/* Left Side - Contact Info */}
        <div className="contact-left bg-[#17426F] text-white p-6 rounded-lg w-full md:w-2/5 relative overflow-hidden flex flex-col justify-between">
          <div className="contact-info space-y-6 relative p-8 z-10">
            <div className="i">
                <h2 className="text-2xl sm:text-3xl  text-white mb-10">Contact Information</h2>
            </div>
            <div className="phone flex items-center mb-6 gap-3">
              <Phone size={20} />
              <p>
                <a href="tel:+2348125444216">+234 812 544 4216</a> or{" "}
                <a href="tel:+2348112953103">+234 811 295 3103</a>
              </p>
            </div>

            <div className="email flex items-center gap-3">
              <Mail size={20} />
              <a href="mailto:careproacademyltl@gmail.com">careproacademyltl@gmail.com</a>
            </div>

            <div className="address flex items-center mb-20 gap-3">
              <MapPin size={20} />
              <p>1557, 4th Avenue, A1 Close, Festac Town, Lagos</p>
            </div>
          </div>
          {/* Background Images */}
          <img
            src="/img/Ellipseup.png"
            alt="Ellipse Up"
            className="absolute bottom-22 right-22 z-10 w-32"
          />
          <img
            src="/img/Ellipsedown.png"
            alt="Ellipse Down"
            className="absolute bottom-0 right-0"
          />

          {/* Contact Connect */}
          <div className="contact-connect mt-46 relative z-10">
           <h3 className="text-lg font-semibold mb-3">Stay Connected</h3>
                     <div className="flex justify-center md:justify-start gap-4 mt-2">
                       <div className=" rounded-full  bg-gray-100 text-[#17426F]  p-2">
                           <a href="https://www.facebook.com/share/16QcSUtUDs/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-green-600 transition">
                           <FaFacebookF />
                           </a>
                       </div>
                       <div className=" rounded-full  bg-gray-100 text-[#17426F]  p-2">
                           <a href="https://www.instagram.com/careproacademy?igsh=OTc2OWkyNzl1ZmRh" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-green-600 transition">
                           <FaInstagram />
                           </a>
                       </div>
                       <div className=" rounded-full  bg-gray-100 text-[#17426F]  p-2">
                           <a href="tel:+1234567890" className="text-sm hover:text-green-600 transition">
                           <FaPhone />
                           </a>
                       </div>
                       <div className=" rounded-full  bg-gray-100 text-[#17426F]  p-2">
                       <a href="mailto:info@carepro.com" className="text-sm hover:text-green-600 transition">
                         <FaEnvelope />
                       </a>
                       </div>
                     </div>
           
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-right w-full md:w-3/5">
          <div className="p-6">
            <form className="contact-form space-y-4">
              <div className="first-row flex flex-col md:flex-row gap-4">
                <div className="firstname w-full">
                  <label className="block text-gray-700">First Name</label>
                  <input type="text"  className="w-full p-2 border-b" />
                </div>
                <div className="lastname w-full">
                  <label className="block text-gray-700">Last Name</label>
                  <input type="text"  className="w-full p-2 border-b " />
                </div>
              </div>

              <div className="second-row flex flex-col md:flex-row gap-4">
                <div className="email w-full">
                  <label className="block text-gray-700">Email</label>
                  <input type="email"  className="w-full p-2 border-b" />
                </div>
                <div className="phone-number w-full">
                  <label className="block text-gray-700">Phone Number</label>
                  <input type="tel" placeholder="+234 000 000 0000" className="w-full p-2 border-b" />
                </div>
              </div>

              <div className="message">
                <label className="block text-gray-700">Message</label>
                <textarea placeholder="Write your message.." className="w-full p-2 border-b h-28"></textarea>
              </div>

              <div className="mt-10 ml-[80%]">
                <Button title="Send Message" containerClass="text-white"/>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section mt-12">
        <Cta />
      </div>
    </div>
  );
};

export default page;
