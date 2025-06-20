'use client';
import React from 'react';

const aboutItems = [
  {
    text: "Anjuman Waseeul Taleem Educational Trust, Raigad is a leading institution in the Konkan region. It is committed to empowering rural communities through technical education.",
  },
  {
    text: "Located in Mazgaon, Taluka Murud, the Trust supports underprivileged youth. It focuses on skill-based education to build self-reliance and dignity.",
  },
  {
    text: "Established in 2006, Mehrunnissa Abbas Fakih ITI offers vocational training. It runs five trades under the Craftsman Training Scheme (CTS).",
  },
  {
    text: "Affiliated with NCVT and DGET (DGET-12/01/2007-TC), Govt. of Maharashtra recognized. The foundation was laid in 2005 by Mr. P. A. Inamdar with Mr. Habib Fakih’s guidance.",
  },
];

export default function HomeAboutUs() {
  return (
    <section className="relative bg-[#e8f0ff] py-12 px-4 overflow-hidden">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#0a1f44]">About Us</h2>

      {/* Card container */}
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-stretch gap-6 max-w-7xl mx-auto">
        {aboutItems.map((item, index) => (
          <div
            key={index}
            className="relative bg-white rounded-3xl p-6 shadow-lg w-full md:w-[45%] lg:w-[22%] text-center text-[#0a1f44]"
          >
            {/* Yellow highlight corner */}
            <div className="absolute top-0 left-0 h-5 w-5 bg-yellow-400 rounded-tr-lg rounded-bl-3xl z-0" />
            <div className="absolute bottom-0 right-0 h-3 w-3 bg-yellow-400 rounded-tl-lg rounded-br-3xl z-0" />
            
            <p className="relative z-10 text-base md:text-[16px] leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Wavy bottom background (optional) */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-[#bcd3f3] rounded-t-[100%]" />
    </section>
  );
}
