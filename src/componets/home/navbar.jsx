"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const marqueeRef = useRef(null);

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    setIsLoggedIn(!!auth);
  }, []);

  useEffect(() => {
    let animationId;
    let position = 0;

    const animate = () => {
      if (marqueeRef.current) {
        position -= 2;
        if (position <= -marqueeRef.current.scrollWidth / 2) {
          position = 0;
        }
        marqueeRef.current.style.transform = `translateX(${position}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isMobileMenuOpen && !event.target.closest(".mobile-menu-container")) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isMobileMenuOpen]);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    setIsLoggedIn(false);
    router.push("/");
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (path) => {
    router.push(path);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Courses", path: "/courses" },
    { name: "Admissions", path: "/admission" },
    { name: "Faculty", path: "/faculty" },
    { name: "Student Corner", path: "/student_corner" },
    { name: "Placement", path: "/placement" },
    { name: "Contact Us", path: "/contactus" },
    { name: "Gallery", path: "/gallery" },
  ];

  const marqueeText = "• Admission open for 2025–26";

  return (
    <div className="w-full sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#1c2848] text-white text-xs sm:text-sm px-4 py-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
        {/* Email and Phone */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
          <div className="flex items-center gap-2">
            <span className="bg-yellow-400 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm">
              <MdEmail />
            </span>
            <span className="font-medium font-Poppins break-words text-[12px] sm:text-sm">
              awtmaft@gmail.com
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="bg-yellow-400 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm">
              <MdPhone />
            </span>
            <span className="font-medium font-Poppins break-words text-[12px] sm:text-sm">
              +91 8983508919
            </span>
          </div>
        </div>

        {/* Admin login/logout */}
        <div className="mt-1 sm:mt-0">
          {!isLoggedIn ? (
            <button
              onClick={() => handleNavigation("http://localhost:3000")}
              className="bg-yellow-500 text-black px-3 py-1 rounded text-xs sm:text-sm hover:bg-yellow-400 transition"
            >
              Admin Login
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded text-xs sm:text-sm hover:bg-red-600 transition"
            >
              Logout
            </button>
          )}
        </div>
      </div>

      <hr className="border-white" />

      {/* Main Nav */}
      <div className="bg-[#1c2848] mobile-menu-container">
        <div className="flex items-center justify-between px-4 py-2 md:px-6 w-full max-w-[1600px] mx-auto">
          {/* Logo */}
          <div onClick={() => handleNavigation("/")} className="cursor-pointer">
            <Image
              src="/logo.png"
              alt="Logo"
              width={60}
              height={60}
              className="w-[60px] h-[60px] sm:w-[80px] sm:h-[70px] md:w-[100px] md:h-[80px] object-contain"
            />
          </div>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex flex-wrap space-x-4 xl:space-x-6 text-sm xl:text-base font-medium">
            {menuItems.map(({ name, path }) => (
              <li
                key={name}
                onClick={() => handleNavigation(path)}
                className={`cursor-pointer whitespace-nowrap transition hover:text-yellow-300 ${
                  pathname === path ? "text-yellow-400" : "text-white"
                }`}
              >
                {name}
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button onClick={toggleMobileMenu} className="lg:hidden flex flex-col gap-1">
            <span
              className={`h-0.5 w-6 bg-white transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition-opacity duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition-transform duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 bg-[#1c2848] overflow-hidden ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="grid grid-cols-2 gap-4 p-4">
            {menuItems.map(({ name, path }) => (
              <div
                key={name}
                onClick={() => handleNavigation(path)}
                className={`text-center border rounded-md px-2 py-2 text-sm font-medium transition-colors cursor-pointer ${
                  pathname === path
                    ? "text-yellow-400 border-yellow-400"
                    : "text-white border-gray-600 hover:text-yellow-300 hover:border-yellow-300"
                }`}
              >
                {name}
              </div>
            ))}
          </div>

          {isLoggedIn && (
            <div className="px-4 pb-4 pt-2 border-t border-gray-600">
              <p className="text-white text-sm mb-2">Welcome, User</p>
              <button
                onClick={handleLogout}
                className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm font-medium"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Marquee */}
        <div className="w-full bg-[#FFDF35] py-1 overflow-hidden">
          <div
            ref={marqueeRef}
            className="whitespace-nowrap text-black font-semibold flex text-[10px] sm:text-xs md:text-sm lg:text-base"
          >
            {Array(25)
              .fill(marqueeText)
              .map((item, index) => (
                <span key={index} className="inline-block mr-8">
                  {item}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
