'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { PiUserCircleFill } from "react-icons/pi";

const testimonials = [
  {
    name: 'Hanzala Dadnak',
    quote: 'The campus life here is vibrant, which makes learning even more enjoyable.',
  },
  {
    name: 'Arman Khatib',
    quote:
      'Placement department bahut active hai, aur bahut saare students ko top companies mein jobs dilwane mein successful rahi hai.',
  },
  {
    name: 'Adina Bakker',
    quote:
      'Iss institute ne mujhe not just academically, but personally bhi grow karne mein madad ki hai.',
  },
];

export default function Testimonials() {
  const router = useRouter();

  return (
    <section className="bg-[#f5f9ff] text-center py-12 px-4 sm:px-6 lg:px-8 font-poppins">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F2A44] mb-12 sm:mb-16">
          Testimonials
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative bg-[#22356F] text-white rounded-tl-4xl rounded-r-4xl px-6 pt-14 pb-6 shadow-lg"
            >
              {/* Avatar Icon */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="bg-white border border-[#D9D9D9] rounded-full p-1">
                  <PiUserCircleFill className="text-black text-5xl sm:text-6xl md:text-7xl" />
                </div>
              </div>

              <h3 className="font-semibold text-lg sm:text-xl mt-2 mb-3">{item.name}</h3>
              <p className="text-sm sm:text-base font-normal leading-relaxed mx-2">
                "{item.quote}"
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={() => router.push('/student_corner/testimonials')}
          className="bg-[#1a264f] text-white px-6 py-2 rounded-md hover:bg-[#162143] transition"
        >
          VIEW MORE
        </button>
      </div>
    </section>
  );
}
