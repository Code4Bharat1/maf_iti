'use client';

import Image from 'next/image';
import React from 'react';

export default function AboutUsPage() {
  return (
    <div className="bg-[#F1F7FF] text-gray-800 font-sans min-h-screen">
      {/* Banner Image */}
      <div className="w-full">
        <Image
          src="/aboutus/img1.png"
          alt="Mehrunnisa Abbas Fakih ITI"
          width={1920}
          height={1080}
          className="w-full h-auto"
        />
      </div>

      {/* About Section */}
      <div className="px-8 md:px-20 py-10 text-[#1D2B53]">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About us</h2>
        <p className="text-base md:text-lg leading-relaxed">
          Anjuman Waseeul Taleem Educational Trust, Raigad is a reputed institution in the Konkan region,
          dedicated to the educational upliftment of society. Established in Mazgaon, Murud (Raigad), the Trust
          founded Mehrunnissa Abbas Fakih ITI in 2006 to provide technical education to rural and underprivileged
          youth. The foundation was laid by Mr. P. A. Inamdar under the chairmanship of Mr. Habib Fakih. The
          institute is affiliated with NCVT, DGET, and recognised by the Govt. of Maharashtra under the Craftsman
          Training Scheme (CTS).
        </p>
      </div>

      {/* Vision & Mission Section with 2 Yellow Layered Boxes */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 px-6 md:px-20 mb-20">
        {[
          {
            title: 'Our vision',
            text: 'To become a leading center of skill development in the Konkan region by empowering rural and underprivileged youth through quality technical education, fostering self-reliance, and building a stronger, skilled society.',
          },
          {
            title: 'Our mission',
            text: 'To deliver practical and industry-relevant training that helps youth build sustainable careers. We strive to foster confidence, skill, and dignity among students from disadvantaged backgrounds, enabling them to lead successful lives.',
          },
        ].map((item, index) => (
          <div key={index} className="relative w-full max-w-md mx-auto h-full">
            {/* Top-left yellow box */}
            <div className="absolute inset-0 rounded-[22px] bg-yellow-400 z-0 -translate-x-3 -translate-y-3" />
            {/* Bottom-right yellow box */}
            <div className="absolute inset-0 rounded-[22px] bg-yellow-400 z-0 translate-x-3 translate-y-3" />
            {/* Main white box */}
            <div className="relative z-10 bg-white border-[3px] border-[#1D2B53] rounded-[22px] px-6 py-10 text-center shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1D2B53] mb-4">
                {item.title}
              </h3>
              <p className="text-black text-base md:text-lg leading-relaxed font-medium">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Highlights Section */}
   <div className="bg-[#F1F7FF] py-5 px-3 sm:px-6 md:px-7 lg:px-12">
    <div className="bg-[#1F2A44] rounded-4xl p-5 sm:p-6 w-[90%] max-w-7xl mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 ml-10  px-10 py-6 justify-center">
      {[
        {
          icon: "/aboutus/teacher.png",
          text: (
            <>
              Learn from <br />
              certified and <br />
              experienced <br />
              faculty.
            </>
          ),
        },
        {
          icon: "/aboutus/book.png",
          text: (
            <>
              Empowering <br />
              students with <br />
              leadership and life <br />
              skills.
            </>
          ),
        },
        {
          icon: "/aboutus/pen.png",
          text: (
            <>
              Strong placement <br />
              support with <br />
              leading <br />
              companies.
            </>
          ),
        },
        {
          icon: "/aboutus/degree.png",
          text: (
            <>
              Clean, <br />
              Disciplined, and <br />
              student-friendly <br />
              campus.
            </>
          ),
        },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white text-[#000000] w-56 h-56 px-4 py-5 flex flex-col justify-center items-center text-center
                     rounded-tl-[40px] rounded-tr-[40px] rounded-br-[40px] rounded-bl-none
                     border border-gray-300 shadow-sm"
        >
          <Image
            src={item.icon}
            alt="icon"
            width={44}
            height={44}
            className="mb-4"
          />
          <p className="text-md font-bold leading-snug">{item.text}</p>
        </div>
      ))}
    </div>
  </div>
</div>
 </div>
  );
}
