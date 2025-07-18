'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Faculty() {
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

 return (
     <section className="bg-[#f4f8ff] py-6 font-poppins">
       <h2 className="text-5xl font-extrabold text-center text-[#1F2A44] mb-10">
         Our Faculty
       </h2>
 
       <div className={`w-full ${isMobile ? 'overflow-x-auto' : ''}`}>
         <div className={`${isMobile ? 'flex gap-6 px-4 pb-4' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4'} max-w-7xl mx-auto`}>
           {facultyMembers.map((member, index) => (
             <div
               key={index}
               onMouseEnter={() => !isMobile && setHoveredIndex(index)}
               onMouseLeave={() => !isMobile && setHoveredIndex(null)}
               className={`relative ${isMobile ? 'w-[280px] flex-shrink-0' : 'w-full max-w-[300px] mx-auto'} h-[500px]`}
             >
               {/* Yellow Box with hover effect on desktop */}
               <div
                 className={`absolute left-1/2 transform -translate-x-1/2 rounded-2xl shadow-xl transition-all duration-300 overflow-hidden z-10 ${
                   hoveredIndex === index
                     ? "bg-yellow-400 w-[260px] h-[360px] top-10 scale-105"
                     : "bg-yellow-300 w-[260px] h-[360px] top-10"
                 }`}
               />
 
               {/* Image */}
               <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20">
                 <div className="relative w-[200px] h-[200px] rounded-lg overflow-hidden">
                   <Image
                     src={member.image}
                     alt={member.name}
                     fill
                     className="object-cover object-center"
                     sizes="200px"
                   />
                 </div>
               </div>
 
               {/* Blue Info Box */}
               <div className="absolute top-[180px] left-1/2 transform -translate-x-1/2 bg-[#2D314A] w-[230px] min-h-[110px] rounded-xl px-3 py-3 z-30 flex flex-col items-center justify-center text-center text-[#FFDF35]">
                 <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                 <p className="font-semibold text-lg mb-1">{member.title}</p>
                 <p className="text-sm text-white">{member.experience}</p>
                 {(hoveredIndex === index || isMobile) && (
                   <div className="mt-2 pt-1">
                     <p className="text-xs text-gray-300 px-1">{member.bio}</p>
                   </div>
                 )}
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
             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
             </svg>
           </div>
         </div>
       )}
     </section>
   );
 }