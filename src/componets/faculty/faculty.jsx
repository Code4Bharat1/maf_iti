'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function FacultyGridWithHover() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  

  const nonTeachingStaff = [
    {
      name: "Bharati Dhasade",
      role: "Peon",
      experience: "11+ Years of Total Experience",
      image: "/aboutus/bharti.png",
    },
    {
      name: "Sone Dharmendra. S",
      role: "Peon",
      experience: "42+ Years of Total Experience",
      image: "/aboutus/sone.png",
    },
    {
      name: "Lane Hidayat. M",
      role: "Store Keeper",
      experience: "40+ Years of Total Experience",
      image: "/aboutus/lane.png",
    },
  ];

  return (
    <section className="bg-[#f4f8ff] py-12 font-poppins">
    

          
{/* Non-Teaching Staff Section */}
<h2 className="text-4xl font-extrabold text-center text-[#1F2A44] mb-10">
  Non-Teaching Staff
</h2>

<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4">
  {nonTeachingStaff.map((staff, index) => (
    <div
      key={index}
      onMouseEnter={() => !isMobile && setHoveredIndex(index)}
      onMouseLeave={() => !isMobile && setHoveredIndex(null)}
      className="relative w-full max-w-[300px] mx-auto h-[420px]"
    >
      {/* Yellow Background Card */}
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 rounded-2xl shadow-xl transition-all duration-300 overflow-hidden ${
          hoveredIndex === index
            ? "bg-yellow-400 w-[300px] h-[380px] top-2"
            : "bg-yellow-300 w-[280px] h-[300px] top-16"
        }`}
      />

      {/* Staff Image */}
      {/* Image Container */}
<div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20">
  <div className="relative w-[200px] h-[200px] rounded-lg overflow-hidden">
    <Image
      src={staff.image}
      alt={staff.name}
      fill
      className="object-cover object-center"
    />
  </div>
</div>

{/* Blue Info Box - Just below image */}
<div
  className={`absolute top-[200px] left-1/2 transform -translate-x-1/2 bg-[#1F2A44] text-white rounded-xl px-5 py-4 z-30 w-[260px] text-center`}
>
  <p className="text-lg font-bold text-[#FFE033]">{staff.name}</p>
  <p className="text-base font-semibold text-yellow-200">{staff.role}</p>
  <p className="text-xs mt-1">{staff.experience}</p>
</div>

    </div>
  ))}
</div>


</section>
  );
}
