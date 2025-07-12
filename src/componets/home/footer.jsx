"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  FaYoutube,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

export default function Footer() {
  const router = useRouter();
  const handleRoute = (path) => router.push(path);

  return (
    <footer className="bg-[#1e2a3a] text-white pt-10 pb-4 text-sm font-poppins">
      <div className="max-w-7xl mx-auto px-4 border-b border-white/20 pb-8">
        {/* === Mobile Logo + Institute Info === */}
        <div className="flex flex-col items-center text-center mb-8 md:hidden">
          <Image src="/logo.png" alt="Logo" width={90} height={90} />
          <h2 className="font-medium text-sm mt-2">
            Mehrunnissa Abbas Fakih Industrial Training Institute
          </h2>
          <p className="mt-2 text-gray-400 text-xs leading-relaxed">
            Powered by Anjuman Waseeul Taleem Educational Trust, Raigad.
            Empowering rural youth through technical education since 2006.
          </p>
        </div>

        {/* === Desktop Layout === */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
          {/* Logo & About */}
          <div className="flex flex-col items-center text-center">
            <Image src="/logo.png" alt="Logo" width={90} height={90} />
            <h2 className="font-medium text-sm mt-2">
              Mehrunnissa Abbas Fakih Industrial Training Institute
            </h2>
            <p className="mt-2 text-gray-400 text-xs leading-relaxed">
              Powered by Anjuman Waseeul Taleem Educational Trust, Raigad.
              Empowering rural youth through technical education since 2006.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-2">Quick Links</h3>
            <ul className="space-y-1 pl-2 text-gray-300 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Courses", path: "/courses" },
                { name: "Admission", path: "/admission" },
                { name: "Contact Us", path: "/contact" },
              ].map((item, i) => (
                <li
                  key={i}
                  className="hover:text-yellow-400 cursor-pointer"
                  onClick={() => handleRoute(item.path)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-2">Contact Info</h3>
            <div className="text-gray-300 text-sm space-y-2">
              <div className="flex items-start gap-2">
                <Image src="/home/location.png" alt="Location" width={20} height={20} className="mt-1" />
                <span>Mazgaon, Taluka Murud, District Raigad, Maharashtra – 402401</span>
              </div>
              <a
                href="https://www.google.com/maps?q=Mazgaon,+Taluka+Murud,+Raigad,+Maharashtra"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-1 border border-white px-3 py-1 rounded text-xs hover:bg-white hover:text-black transition">
                  View Map
                </button>
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-2">Connect</h3>
            <div className="text-gray-300 text-sm space-y-3">
              <div className="flex items-center gap-2">
                <Image src="/home/phone.png" alt="Phone" width={18} height={18} />
                <a href="tel:+918983508919" className="hover:text-yellow-400">+91 8983508919</a>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/home/mail.png" alt="Mail" width={18} height={18} />
                <a href="mailto:awtmtaft@gmail.com" className="hover:text-yellow-400 break-all">awtmtaft@gmail.com</a>
              </div>
              <div className="flex gap-3 mt-3">
                <a
                  href="https://www.youtube.com/@awtmtaft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-full p-2 text-red-500 hover:bg-gray-100 transition"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://www.instagram.com/awtmtaft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-[1px] bg-gradient-to-tr from-yellow-300 via-red-400 to-pink-500 hover:opacity-90"
                >
                  <div className="bg-white rounded-full p-2 text-pink-500">
                    <FaInstagram />
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/awtmtaft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-full p-2 text-blue-500 hover:bg-gray-100 transition"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* === Mobile Grid: Quick Links & Connect === */}
        <div className="md:hidden mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-2 text-white">Quick Links</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Courses", path: "/courses" },
                { name: "Admission", path: "/admission" },
                { name: "Contact Us", path: "/contact" },
              ].map((item, i) => (
                <li
                  key={i}
                  className="hover:text-yellow-400 cursor-pointer"
                  onClick={() => handleRoute(item.path)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-lg mb-2 text-white">Connect</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <div className="flex items-center gap-2">
                <Image src="/home/phone.png" alt="Phone" width={16} height={16} />
                <a href="tel:+918983508919" className="hover:text-yellow-400 text-xs">+91 8983508919</a>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/home/mail.png" alt="Mail" width={16} height={16} />
                <a href="mailto:awtmtaft@gmail.com" className="hover:text-yellow-400 text-xs break-all">
                  awtmtaft@gmail.com
                </a>
              </div>
              <div className="flex gap-3 mt-3">
                <a
                  href="https://www.youtube.com/@awtmtaft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-full p-2 text-red-500 hover:bg-gray-100 transition"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://www.instagram.com/awtmtaft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-[1px] bg-gradient-to-tr from-yellow-300 via-red-400 to-pink-500 hover:opacity-90"
                >
                  <div className="bg-white rounded-full p-2 text-pink-500">
                    <FaInstagram />
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/awtmtaft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-full p-2 text-blue-500 hover:bg-gray-100 transition"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Contact Info */}
        <div className="md:hidden mt-6">
          <h3 className="font-semibold text-lg mb-2 text-white">Contact Info</h3>
          <div className="text-gray-300 text-sm">
            <div className="flex items-start gap-2">
              <Image src="/home/location.png" alt="Location Icon" width={20} height={20} />
              <span>Mazgaon, Taluka Murud, District Raigad, Maharashtra – 402401</span>
            </div>
            <a
              href="https://www.google.com/maps?q=Mazgaon,+Taluka+Murud,+Raigad,+Maharashtra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-2 border border-white px-3 py-1 rounded text-xs hover:bg-white hover:text-black transition">
                View Map
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-yellow-400 text-xs mt-4 font-semibold px-4">
        © 2025 AWT Mehrunnissa Abbas Fakih ITI. All rights reserved | Designed by Code4Bharat
      </div>
    </footer>
  );
}
