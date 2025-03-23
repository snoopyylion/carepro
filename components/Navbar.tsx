"use client"; // Ensure interactivity in Next.js App Router

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down, hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up, show navbar
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
      className={`fixed top-0 left-0 w-full px-6 py-4 bg-white shadow-md transition-transform duration-300 z-50 ${
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
          <li>
            <Link href="/" className="hover:text-blue-800 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-800 transition">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="hover:text-blue-800 transition">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/faqs" className="hover:text-blue-800 transition">
              FAQs
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-800 transition">
              Contact Us
            </Link>
          </li>
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
        className={`fixed inset-0 z-50 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } bg-opacity-50`}
        onClick={() => setIsOpen(false)}
      >
        {/* Sidebar Content */}
        <div
          className="fixed top-0 right-0 w-64 h-[100dvh] bg-white shadow-lg p-5 flex flex-col transform transition-transform"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            className="self-end text-2xl text-gray-800"
            onClick={() => setIsOpen(false)}
          >
            <IoMdClose />
          </button>

          {/* Sidebar Links */}
          <ul className="flex flex-col gap-6 mt-10 text-gray-800 font-medium">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsOpen(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/gallery" onClick={() => setIsOpen(false)}>
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/faqs" onClick={() => setIsOpen(false)}>
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
