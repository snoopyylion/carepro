import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Automatically get the current year

  return (
    <footer className="bg-[#17426F] text-white py-10 mt-16">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start justify-center">
          <Link href="/">
            <Image src="/img/logo.png" alt="logo" width={87} height={96} className="object-contain" />
          </Link>
        </div>

        {/* Company Section */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-green-400 transition">About Us</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-green-400 transition">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-green-400 transition">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2">
            <li><Link href="/support" className="hover:text-green-400 transition">Get Support</Link></li>
            <li><Link href="/contact" className="hover:text-green-400 transition">Contact Us</Link></li>
            <li><Link href="/faqs" className="hover:text-green-400 transition">FAQs</Link></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="text-center md:text-left justify-self-end self-end">
          <h3 className="text-lg font-semibold mb-3">Stay Connected</h3>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <div className=" rounded-full bg-gray-950 p-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-green-600 transition">
                <FaFacebookF />
                </a>
            </div>
            
            <div className=" rounded-full bg-gray-950 p-2">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-green-600 transition">
                <FaTwitter />
                </a>
            </div>
            <div className=" rounded-full bg-gray-950 p-2">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-green-600 transition">
                <FaLinkedinIn />
                </a>
            </div>
            <div className=" rounded-full bg-gray-950 p-2">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-green-600 transition">
                <FaInstagram />
                </a>
            </div>
            <div className=" rounded-full bg-gray-950 p-2">
                <a href="tel:+1234567890" className="text-sm hover:text-green-600 transition">
                <FaPhone />
                </a>
            </div>
            <div className=" rounded-full bg-gray-950 p-2">
            <a href="mailto:info@carepro.com" className="text-sm hover:text-green-600 transition">
              <FaEnvelope />
            </a>
            </div>
          </div>
        </div>
      </div>

      {/* Thin HR Line */}
      <hr className="border-t border-gray-500 w-11/12 mx-auto my-4" />

      {/* Copyright Section */}
      <div className="text-center text-sm">
        © {currentYear} CarePro Academy. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
