"use client"; // Ensure interactivity in Next.js App Router

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        // If scrolling down & past 50px, hide navbar
        setIsVisible(false);
      } else {
        // If scrolling up, show navbar
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white shadow-md px-6 py-4 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/img/logo.png"
            alt="logo"
            width={87}
            height={96}
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-14 text-gray-800 font-medium">
          <Link href="/" className="hover:text-blue-800 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-800 transition">
            About Us
          </Link>
          <Link href="/gallery" className="hover:text-blue-800 transition">
            Gallery
          </Link>
          <Link href="/faqs" className="hover:text-blue-800 transition">
            FAQs
          </Link>
          <Link href="/contact" className="hover:text-blue-800 transition">
            Contact Us
          </Link>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 text-2xl"
          onClick={() => setIsOpen(true)}
        >
          <IoMdMenu />
        </button>
      </nav>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed inset-0 z-50 transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-5 flex flex-col">
          <button
            className="self-end text-2xl text-gray-800"
            onClick={() => setIsOpen(false)}
          >
            <IoMdClose />
          </button>

          <ul className="flex flex-col gap-6 mt-10 text-gray-800 font-medium">
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Link href="/gallery" onClick={() => setIsOpen(false)}>
              Gallery
            </Link>
            <Link href="/faqs" onClick={() => setIsOpen(false)}>
              FAQs
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
