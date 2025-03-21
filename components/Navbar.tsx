"use client"; // Ensure interactivity in Next.js App Router

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="px-6 py-4 bg-white shadow-md">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/img/logo.png"
            alt="logo"
            width={67}
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
        className={`fixed inset-0  z-50 transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Content */}
        <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-5 flex flex-col">
          {/* Close Button */}
          <button
            className="self-end text-2xl text-gray-800"
            onClick={() => setIsOpen(false)}
          >
            <IoMdClose />
          </button>

          {/* Sidebar Links */}
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
