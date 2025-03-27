"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Button from "./Button";
import Image from "next/image";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
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
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          reply_to: formData.email, // Add this
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      console.log("Email sent successfully!", result.text);
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setFormStatus("sent");
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message.");
      setFormStatus("idle");
    }
  };

  return (
    <div className="py-24 px-0">
      <ToastContainer position="top-center" />
      <div className="w-full max-w-none">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-600">Contact Us</h2>
          {formStatus === "sending" && <p className="text-blue-500 mt-2">Sending...</p>}
          {formStatus === "sent" && <p className="text-green-500 mt-2">Message sent!</p>}
        </div>

        <div className="flex flex-col md:flex-row w-full h-auto md:h-[90vh] bg-[#17426F] overflow-hidden">
          <div className="flex-1 flex justify-center items-center p-10 bg-[#17426F]">
            <div className="w-full max-w-lg p-6 sm:p-10 rounded-lg shadow-md bg-white">
              <h2 className="text-2xl font-light text-[#132c46] text-center mb-6">Send A Message</h2>
              <form className="space-y-4" onSubmit={sendEmail}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  name="message"
                  placeholder="Type your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="w-full bg-blue-950 hover:bg-blue-900 text-white py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  {formStatus === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          <div className="flex-1 relative w-full h-full">
            <Image
              src="/img/contactimg.png"
              alt="Contact"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
