"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export default function Navbar() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const marqueeRef = useRef(null);

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    setIsLoggedIn(!!auth);
  }, []);

  useEffect(() => {
    // Continuous marquee animation
    let animationId;
    let position = 0;
    
    const animate = () => {
      if (marqueeRef.current) {
        position -= 1; // Speed of movement (adjust as needed)
        
        // Reset position when text has moved completely off screen
        if (position <= -marqueeRef.current.scrollWidth / 2) {
          position = 0;
        }
        
        marqueeRef.current.style.transform = `translateX(${position}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  const handleLogin = () => router.push("/login");
  const handleLogout = () => {
    localStorage.removeItem("auth");
    setIsLoggedIn(false);
    router.push("/");
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Courses", path: "/courses" },
    { name: "Admissions", path: "/admissions" },
    { name: "Faculty", path: "/faculty" },
    { name: "Student Corner", path: "/student-corner" },
    { name: "Placement", path: "/placement" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "Gallery", path: "/gallery" },
  ];

  const marqueeText = "• Admission open for 2025–26";

  return (
    <div className="w-full sticky top-0 z-50">
      {/* Top bar with login/logout */}
      <div className="bg-[#0b1539] flex justify-end pr-10 items-center px-4 py-1">
        {!isLoggedIn ? (
          <button
            onClick={handleLogin}
            className="bg-[#FFDF35] cursor-pointer hover:bg-yellow-500 text-black px-3 py-1 rounded text-sm"
          >
            Log In
          </button>
        ) : (
          <div className="flex items-center space-x-4">
            <span className="text-white text-sm">Welcome, User</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
            >
              Logout
            </button>
          </div>
        )}
      </div>
      <hr className="bg-white border border-white" />
      
      {/* Main navbar section */}
      <div className="bg-[#1c2848] w-full">
        <div className="w-[95%] mx-auto px-6 flex items-center justify-between py-1 max-w-[1600px]">
          {/* Logo */}
          <div onClick={() => router.push("/")} className="cursor-pointer">
            <Image src="/logo.png" alt="Logo" width={80} height={80} />
          </div>

          {/* Navigation menu */}
          <ul className="flex space-x-8 text-xl font-medium">
            {menuItems.map(({ name, path }) => (
              <li
                key={name}
                onClick={() => router.push(path)}
                className={`cursor-pointer ${
                  path === "/" ? "text-yellow-400" : "text-white"
                } hover:text-yellow-300 transition`}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>

        {/* Continuous Marquee */}
        <div className="w-full bg-[#FFD700] py-1 overflow-hidden">
          <div 
            ref={marqueeRef}
            className="whitespace-nowrap text-black font-semibold flex"
          >
            {Array(25).fill(marqueeText).map((item, index) => (
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