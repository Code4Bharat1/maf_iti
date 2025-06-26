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

  const facultyMembers = [
    {
      name: "Parkar Jameel. Y",
      title: "Trade Instructor",
      experience: "27+ Teaching Experiences",
      image: "/faculty/sir1.png",
      bio: "Expert in practical and theoretical concepts of trade.",
    },
    {
      name: "Mukadam Vazir. AR",
      title: "Trade Instructor",
      experience: "38 yrs of Teaching & Industrial experience",
      image: "/faculty/sir2.png",
      bio: "Dedicated to grooming students for industry-readiness.",
    },
    {
      name: "Khatib Ubaidulla. M",
      title: "Trade Instructor",
      experience: "20+ years Teaching & Industrial Experience",
      image: "/faculty/sir3.png",
      bio: "Blends field experience with classroom teaching.",
    },
    {
      name: "Dakhni Irshad.I",
      title: "Engg Draw Workshop & CWS Science Instructor",
      experience: "20+ years experience",
      image: "/faculty/sir4.png",
      bio: "Specialist in Engineering Drawing & Workshop Practice.",
    },
    {
      name: "Firfire Fabiha . S",
      title: "Trade Instructor",
      experience: "19+ years Teaching Experience",
      image: "/faculty/sir5.png",
      bio: "Passionate educator shaping future trade professionals.",
    },
    {
      name: "Dalvi Ejaz. M",
      title: "Trade Instructor",
      experience: "16+ years Teaching Experience",
      image: "/faculty/sir6.png",
      bio: "Experienced in technical education and training.",
    },
  ];

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
      <h2 className="text-4xl font-bold text-center text-[#1F2A44] mb-10">
        Our Faculty
      </h2>

      {/* Faculty Members Section */}
      <div className={`w-full ${isMobile ? "overflow-x-scroll" : ""}`}>
        <div
          className={`${
            isMobile
              ? "flex gap-6 px-4 pb-4"
              : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
          } max-w-6xl mx-auto`}
        >
          {facultyMembers.map((member, index) => (
            <div
              key={index}
              onMouseEnter={() => !isMobile && setHoveredIndex(index)}
              onMouseLeave={() => !isMobile && setHoveredIndex(null)}
              className={`relative ${
                isMobile ? "w-[280px] flex-shrink-0" : "w-full max-w-[300px] mx-auto"
              } h-[400px]`}
            >
              {/* Card background */}
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 rounded-2xl shadow-xl transition-all duration-300 overflow-hidden ${
                  hoveredIndex === index
                    ? "bg-yellow-400 w-[300px] h-[380px] top-2"
                    : "bg-yellow-300 w-[280px] h-[300px] top-16"
                }`}
              />

              {/* Image */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20">
                <div className="relative w-[200px] h-[209px] rounded-lg overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center"
                    sizes="200px"
                  />
                </div>
              </div>

              {/* Text content */}
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 bg-[#2D314A] rounded-xl px-6 py-4 z-30 transition-all duration-300 ${
                  hoveredIndex === index ? "top-48 w-[280px]" : "top-52 w-[260px]"
                }`}
              >
                <div className="text-center text-[#FFDF35]">
                  <h3 className="text-lg font-bold leading-tight mb-1">
                    {member.name}
                  </h3>
                  <p className="font-semibold text-sm text-yellow-200 mb-2">
                    {member.title}
                  </p>
                  <p className="text-xs text-white mb-2">{member.experience}</p>

                  {(hoveredIndex === index || isMobile) && (
                    <div className="mt-3 pt-3">
                      <p className="text-xs text-gray-300 leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile scroll hint */}
      {isMobile && (
        <div className="text-center mt-6">
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full">
            <span className="text-sm">Swipe to see more</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      )}

      

  
{/* Non-Teaching Staff Section */}
<h2 className="text-4xl font-bold text-center text-[#1F2A44] mb-10">
  Non-Teaching Staff
</h2>

<div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4">
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
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-30">
        <div
          className={`relative transition-all duration-300 rounded-md overflow-hidden ${
            hoveredIndex === index ? "w-[200px] h-[210px]" : "w-[180px] h-[190px]"
          }`}
        >
          <Image
            src={staff.image}
            alt={staff.name}
            fill
            className="object-contain object-top"
          />
        </div>
      </div>

      {/* Blue Info Box - aligned directly under image */}
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 bg-[#1F2A44] text-white rounded-xl px-6 py-5 z-20 transition-all duration-300 ${
          hoveredIndex === index ? "top-[210px] w-[280px]" : "top-[190px] w-[260px]"
        } text-center`}
      >
        <p className="text-lg font-bold text-[#FFE033]">{staff.name}</p>
        <p className="text-base font-semibold text-yellow-200">{staff.role}</p>
        <p className="text-xs mt-1 text-white">{staff.experience}</p>
      </div>
    </div>
  ))}
</div>


</section>
  );
}
