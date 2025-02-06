import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#123524] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <img src={logo} alt="Logo" className="w-40" />
          </div>

          <div className="flex space-x-12 text-lg">
            <a href="#home" className="hover:text-[#4caf50] transition">
              Home
            </a>
            <a href="#about" className="hover:text-[#4caf50] transition">
              About
            </a>
            <a href="#services" className="hover:text-[#4caf50] transition">
              Services
            </a>
            <a href="#contact" className="hover:text-[#4caf50] transition">
              Contact
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex space-x-8 mb-4 md:mb-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-[#4caf50] transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-[#4caf50] transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-[#4caf50] transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-[#4caf50] transition"
            >
              <FaLinkedin />
            </a>
          </div>

          <div className="text-center md:text-right text-sm">
            <p>Phone: 08025670615</p>
            <p>Email: lagbaja.com</p>
          </div>
        </div>

        <div className="text-center text-sm mt-8 border-t border-[#4caf50] pt-6">
          <p>&copy; 2025 Farm Junction. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
