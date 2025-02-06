import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const clickHam = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Set scrolled state
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all  duration-300 ${
        isScrolled ? "h-16 bg-[rgb(39,65,53)]" : "h-16 py-10"
      } backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-36 h-full ">
        <div className="flex items-center justify-between h-full">
          <img
            src={logo}
            alt="Example"
            class="w-[20%]  h-auto object-cover filter brightness-125"
          />

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-white hover:text-[#EFE3C2]">
              Home
            </a>
            <a href="#about" className="text-white hover:text-[#EFE3C2]">
              Products
            </a>
            <a href="#services" className="text-white hover:text-[#EFE3C2]">
              Our Story
            </a>
            <a href="#contact" className="text-white hover:text-[#EFE3C2]">
              Carrers
            </a>
          </nav>

          <div className="md:hidden">
            <div className="max-sm:block sm:block md:hidden">
              <button
                onClick={clickHam}
                className="group flex flex-col justify-between w-8 h-6 relative z-50 cursor-pointer"
              >
                <span
                  className={`block h-1 w-full bg-white transform transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-[10px]" : ""
                  }`}
                ></span>
                <span
                  className={`block h-1 w-full bg-white transition-all duration-300 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`block h-1 w-full bg-white transform transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-[10px] bg-[#4caf50] " : ""
                  }`}
                ></span>
              </button>

              {isOpen && (
                <div className="fixed z-40 top-0 h-[100vh] left-0 bg-[#4caf50] w-full shadow-lg p-8 overflow-hidden">
                  <h2 className="text-white text-[20px] font-extrabold mb-6 uppercase tracking-wide">
                    Menu
                  </h2>
                  <ul className="space-y-6 text-white text-[18px] font-medium ">
                    {[
                      { href: "#home", label: "Home" },
                      { href: "#Products", label: "Our Company" },
                      { href: "#Our Story", label: "Brands" },
                      { href: "#Carrers", label: "Sustainability" },
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="menu-item border-b-[1px] border-white"
                      >
                        <a
                          href={item.href}
                          className="hover:text-[#EFE3C2] transition duration-300 flex gap-3 items-center"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center text-white text-[14px] italic">
                    Powered by <span className="font-bold">DeMiller Farms</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
