"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <main className="relative w-full">
      {/* Banner Section */}
      <div className="relative h-[85vh] w-full bg-gray-100 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/home/hero.jpg"
          alt="Hero Image"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F2A44]/80 via-[#1F2A44]/60 to-[#1F2A44]/30" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between px-4 py-10 sm:px-8 md:px-16 lg:px-24">
          
          {/* Top Heading */}
          <div className="text-left mt-6 sm:mt-12 animate-slide-up">
            <h1 className="text-white font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl">
              Start Your <span className="text-white">Beautiful</span> And
              <br />
              <span className="text-[#FFD700]">Bright</span> Future
            </h1>
          </div>

          {/* Bottom Subtext */}
          <div className="text-left mb-6 sm:mb-12 animate-fade-in delay-300">
            <p className="text-[#FFD700] font-semibold leading-snug text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-4xl">
              <span className="block">Shaping careers with hands-on training,</span>
              <span className="block mt-2">industry-ready skills, and expert guidance.</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
