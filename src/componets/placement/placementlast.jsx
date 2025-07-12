'use client';

import { FaUserCircle } from 'react-icons/fa';

const placements = [
  {
    name: 'Safeer Ashraf Chogle',
    company: 'S.K Auto Rider,\nRoyal Enfield',
  },
  {
    name: 'Sajid Mehmood Khan',
    company: 'Aditya Birla\nGrasim, Bharuch',
  },
  {
    name: 'Adina Sadique Bakar',
    company: 'Student\nAlliance LLP',
  },
];

export default function Placementlast() {
  return (
    <section className="bg-[#f5f9ff] py-8 sm:py-10 md:py-12">
      <h2 className="text-center text-xl sm:text-2xl md:text-4xl font-extrabold text-[#1F2A44] mb-6 sm:mb-8 md:mb-10 px-4">
        Placement at our MAF ITI
      </h2>
      
      <section className="bg-white p-4 sm:p-8 md:px-10 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8 bg-white max-w-6xl mx-auto">
          {placements.map((person, index) => (
            <div
              key={index}
              className="relative bg-[#1F2A44] text-white rounded-2xl pt-10 pb-6 px-4 sm:px-6 md:px-8 shadow-md text-center"
            >
              {/* User icon */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white p-2 rounded-full shadow-md">
                <FaUserCircle className="text-4xl sm:text-5xl md:text-6xl text-black" />
              </div>

              <h3 className="font-semibold text-base sm:text-lg md:text-xl mb-4 mt-2 px-2">
                {person.name}
              </h3>

              <div className="bg-white text-sm sm:text-base md:text-lg font-semibold text-black rounded px-4 py-3 whitespace-pre-line inline-block">
                {person.company}
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
