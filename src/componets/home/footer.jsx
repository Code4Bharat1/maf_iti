"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const router = useRouter();

  const handleRoute = (path) => {
    router.push(path);
  };

  return (
    <footer className="bg-[#1e2a3a] text-white pt-10 pb-5">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-400 pb-8">
        {/* Logo & Institute Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Image src="/logo.png" alt="Logo" width={80} height={80} />
          <h2 className="mt-2 font-bold text-lg">Mehrunnissa Abbas Fakih Industrial Training Institute</h2>
          <p className="mt-2 text-sm text-gray-300">
            Powered by Anjuman Waseeul Taleem Educational Trust, Raigad. Empowering rural youth through technical education since 2006.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-300">
            <li className="cursor-pointer hover:text-yellow-400" onClick={() => handleRoute("/")}>Home</li>
            <li className="cursor-pointer hover:text-yellow-400" onClick={() => handleRoute("/about")}>About Us</li>
            <li className="cursor-pointer hover:text-yellow-400" onClick={() => handleRoute("/courses")}>Courses</li>
            <li className="cursor-pointer hover:text-yellow-400" onClick={() => handleRoute("/admission")}>Admission</li>
            <li className="cursor-pointer hover:text-yellow-400" onClick={() => handleRoute("/contact")}>Contact Us</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold text-lg mb-2">Contact Info</h3>
          <div className="text-gray-300 space-y-2">
            <p className="flex items-center justify-center md:justify-start">
              <FaMapMarkerAlt className="mr-2" /> Mazgaon, Taluka Murud, District Raigad, Maharashtra – 402401
            </p>
            <a
              href="https://www.google.com/maps?q=Mazgaon,+Taluka+Murud,+Raigad,+Maharashtra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-2 border border-white px-3 py-1 rounded text-sm hover:bg-white hover:text-black transition">
                View Map
              </button>
            </a>

            <p className="flex items-center justify-center md:justify-start mt-4">
              <FaPhoneAlt className="mr-2" />
              <a href="tel:+918983508919" className="hover:text-yellow-400">+91 8983508919</a>
            </p>

            <p className="flex items-center justify-center md:justify-start">
              <FaEnvelope className="mr-2" />
              <a href="mailto:awtmtaft@gmail.com" className="hover:text-yellow-400">awtmtaft@gmail.com</a>
            </p>

            <div className="flex justify-center md:justify-start mt-2 space-x-3 text-lg text-yellow-400">
              <a href="https://www.youtube.com/@awtmtaft" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
              <a href="https://www.instagram.com/awtmtaft" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://www.facebook.com/awtmtaft" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-yellow-400 font-semibold space-x-4 mt-4">
        © Copyright 2025 AWT Mehrunnissa Abbas Fakih ITI All rights reserved | Designed by Code4bharat
      </div>
    </footer>
  );
}
