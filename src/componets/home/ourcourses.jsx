'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function CoursesSection() {
  const router = useRouter();

  const courses = [
    {
      title: 'Refrigeration & Air Conditioning Technician (RACT)',
      image: '/home/student1.png',
      route: '/courses/ract',
    },
    {
      title: 'Draughtsman Mechanical',
      image: '/home/student2.png',
      route: '/courses/draughtsmanmechanical',
    },
    {
      title: 'Computer Operator & Programming Assistant (COPA)',
      image: '/home/welcome.png',
      route: '/courses/copa',
    },
  ];

  const handleClick = (route) => {
    router.push(route);
  };

  return (
    <section className="bg-[#f3f8fe] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-[#1a264f]">
          Our Courses
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div
              key={idx}
              onClick={() => handleClick(course.route)}
              className="cursor-pointer bg-white rounded shadow hover:shadow-lg transition-all duration-300 hover:scale-105 flex flex-col justify-between"
            >
              {/* Image stays the same */}
              <div className="relative w-full h-60 sm:h-64 md:h-56 lg:h-60">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Increased top and bottom padding */}
              <div className="pt-10 pb-10 px-6 text-center text-lg font-semibold">
                <h3 className="text-md font-semibold text-[#1a264f] leading-snug">
                  {course.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
