"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";
import Button from "@/components/Button";
import Cta from "@/components/Cta";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const page: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();

    if (
      !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    ) {
      console.error("Missing EmailJS environment variables");
      toast.error("Error: Missing EmailJS configuration.");
      return;
    }

    setFormStatus("sending");

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.firstName + " " + formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          reply_to: formData.email,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      console.log("Email sent successfully!", result.text);
      toast.success("Message sent successfully!");
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      setFormStatus("sent");
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message.");
      setFormStatus("idle");
    }
  };

  return (
    <div className="contact-us bg-[#f9f9f9] w-full px-4 sm:px-6 py-10 md:px-12 mt-14 relative">
      <ToastContainer position="top-center" />
      {/* Header & Description */}
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600">Contact Us</h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">Any question or remarks? Just write us a message!</p>
        {formStatus === "sending" && <p className="text-blue-500 mt-2">Sending...</p>}
        {formStatus === "sent" && <p className="text-green-500 mt-2">Message sent!</p>}
      </div>

      {/* Contact Section */}
      <div className="contact-section flex flex-col md:flex-row bg-white rounded-3xl p-6 sm:p-12">
        {/* Left Side - Contact Info */}
        <div className="contact-left bg-[#17426F] text-white p-6 rounded-lg w-full md:w-2/5 relative overflow-hidden flex flex-col justify-between">
          <div className="contact-info space-y-4 sm:space-y-6 relative p-6 sm:p-8 z-20 mb-10">
            <div className="i">
                <h2 className="text-xl sm:text-2xl md:text-3xl text-white mb-6">Contact Information</h2>
            </div>
            <div className="phone flex items-center mb-4 sm:mb-6 gap-2 sm:gap-3 text-sm sm:text-base">
              <Phone size={18} />
              <p>
                <a href="tel:+2348125444216" className="hover:underline">
                  +234 812 544 4216
                </a>{" "}
                or{" "}
                <a href="tel:+2348112953103" className="hover:underline">
                  +234 811 295 3103
                </a>
              </p>
            </div>

            <div className="email flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
              <Mail size={18} />
              <a href="mailto:careproacademyltd@gmail.com" className="hover:underline">
                careproacademyltd@gmail.com
              </a>
            </div>

            <div className="address flex items-center mb-10 sm:mb-20 gap-2 sm:gap-3 text-sm sm:text-base">
              <MapPin size={18} />
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

          {/* Social Media Links */}
          <div className="contact-connect flex flex-col mt-10 sm:mt-16 relative z-10">
            <h3 className="text-base sm:text-lg font-semibold mb-3">Stay Connected</h3>
            <div className="flex gap-3">
              {[
                {
                  href: "https://www.facebook.com/share/16QcSUtUDs/?mibextid=wwXIfr",
                  icon: <FaFacebookF />,
                },
                {
                  href: "https://www.instagram.com/careproacademy?igsh=OTc2OWkyNzl1ZmRh",
                  icon: <FaInstagram />,
                },
                { href: "tel:+1234567890", icon: <FaPhone /> },
                { href: "mailto:info@carepro.com", icon: <FaEnvelope /> },
              ].map((item, index) => (
                <div key={index} className="rounded-full bg-gray-100 text-[#17426F] p-2">
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base hover:text-green-600 transition">
                    {item.icon}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* Right Side - Contact Form */}
        <div className="contact-right w-full md:w-3/5">
          <div className="p-6 sm:p-8">
            <form onSubmit={sendEmail} className="contact-form space-y-4">
              <div className="first-row flex flex-col md:flex-row gap-4">
                <div className="firstname w-full">
                  <label className="block text-gray-700 text-sm sm:text-base">
                    First Name
                  </label>
                  <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required className="w-full p-2 border-b text-sm sm:text-base" />
                </div>
                <div className="lastname w-full">
                  <label className="block text-gray-700 text-sm sm:text-base">
                    Last Name
                  </label>
                  <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required className="w-full p-2 border-b text-sm sm:text-base" />
                </div>
              </div>

              <div className="second-row flex flex-col md:flex-row gap-4">
                <div className="email w-full">
                  <label className="block text-gray-700 text-sm sm:text-base">Email</label>
                  <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required  className="w-full p-2 border-b text-sm sm:text-base" />
                </div>
                <div className="phone-number w-full">
                  <label className="block text-gray-700 text-sm sm:text-base">Phone Number</label>
                  <input type="text" name="phone" placeholder="+234 000 000 0000" value={formData.phone} onChange={handleChange} className="w-full p-2 border-b text-sm sm:text-base" />
                </div>
              </div>

              <div className="message">
                <label className="block text-gray-700 text-sm sm:text-base">Message</label>
                <textarea name="message" placeholder="Write your message.." value={formData.message} onChange={handleChange} required  className="w-full p-2 border-b h-24 sm:h-28 text-sm sm:text-base"></textarea>
              </div>

              <div className="mt-8 flex justify-end">
                <Button title={formStatus === "sending" ? "Sending..." : "Send Message"} containerClass="text-white" />
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
