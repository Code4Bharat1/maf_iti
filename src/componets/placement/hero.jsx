'use client';

import Image from 'next/image';

export default function PlacementSection() {
  return (
    <section className="relative bg-[#f5f9ff] py-10 px-4 flex flex-col lg:flex-row lg:justify-start lg:items-center">
      {/* Image Container */}
     <div className="relative z-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 mx-4 sm:mx-8 lg:mx-40 gap-4 mb-6 lg:mb-0">
  <div className="w-full max-w-[400px] h-[200px] sm:h-[250px] lg:w-[400px] lg:h-[300px] relative mx-auto">
    <Image
      src="/placement/placement1.png"
      alt="Classroom"
      fill
      className="object-cover rounded shadow"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-[#1F2A44]/70 via-[#1F2A44]/50 to-[#1F2A44]/30 rounded" />
  </div>
  
  <div className="w-full max-w-[400px] h-[200px] sm:h-[250px] lg:w-[400px] lg:h-[300px] relative mx-auto">
    <Image
      src="/placement/placement2.png"
      alt="Guidance"
      fill
      className="object-cover rounded shadow"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-[#1F2A44]/70 via-[#1F2A44]/50 to-[#1F2A44]/30 rounded" />
  </div>
</div>
{/* 🟨 Yellow Card Overlapping both images */}
<div className="hidden lg:block absolute left-[500px] top-[125px] z-10 w-[740px]">
  <div className="bg-[#FFDF35] text-gray-900 px-10 py-20 rounded shadow-md">
    <p className="text-[18px] xl:text-[25px] font-medium leading-relaxed">
      At our college, we focus on nurturing each student's potential with dedicated placement support and skill-building programs. Through personalized training, industry exposure, and internship opportunities, we prepare students to confidently step into the professional world. Our growing network of recruiters and career guidance ensures that every student gets a fair shot at success.
    </p>
  </div>
</div>


    </section>
  );
}