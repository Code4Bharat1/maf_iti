'use client';

import Image from 'next/image';

export default function PlacementStats() {
  return (
    <section className="relative bg-[#f5f9ff] overflow-hidden">
      {/* Top Half Circle SVG Curve */}
      <div className="absolute top-0 left-0 w-full z-20">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[60px] sm:h-[90px] md:h-[120px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#f5f9ff"
            d="M0,0 Q720,120 1440,0 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      {/* Yellow background section */}
      <div className="relative z-10 bg-[#FFDF35] py-16 sm:py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          
          {/* Card 1 */}
          <div className="relative bg-[#192139] text-white px-6 py-14 sm:px-10 sm:py-16 rounded-t-3xl rounded-r-3xl shadow-md flex flex-col items-center gap-4">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px]">
              <Image
                src="/placement/icon1.png"
                alt="Companies"
                fill
                className="object-contain border-4 border-white bg-white rounded-full"
              />
            </div>
            <p className="font-semibold text-lg sm:text-xl md:text-2xl mt-6">30+ Companies Visited</p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-[#192139] text-white px-6 py-14 sm:px-10 sm:py-16 rounded-t-3xl rounded-r-3xl shadow-md flex flex-col items-center gap-4">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px]">
              <Image
                src="/placement/icon2.png"
                alt="Placements"
                fill
                className="object-contain border-4 border-white bg-white rounded-full"
              />
            </div>
            <p className="font-semibold text-lg sm:text-xl md:text-2xl mt-6">50+ Students Placed in Top Roles</p>
          </div>

          {/* Card 3 */}
          <div className="relative bg-[#192139] text-white px-6 py-14 sm:px-10 sm:py-16 rounded-t-3xl rounded-r-3xl shadow-md flex flex-col items-center gap-4">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px]">
              <Image
                src="/placement/icon3.png"
                alt="Internships"
                fill
                className="object-contain border-4 border-white bg-white rounded-full"
              />
            </div>
            <p className="font-semibold text-lg sm:text-xl md:text-2xl mt-6">Internship Opportunities in 10+ Fields</p>
          </div>
        </div>
      </div>

      {/* Bottom Half Circle SVG Curve */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[60px] sm:h-[90px] md:h-[120px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#f5f9ff"
            d="M0,120 Q720,0 1440,120 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
    </section>
  );
}
