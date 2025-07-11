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
    <section className="bg-[#f3f8fe] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-10 text-[#1a264f]">
          Our Courses
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, idx) => (
            <div
              key={idx}
              onClick={() => handleClick(course.route)}
              className="cursor-pointer bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative w-full h-56 sm:h-64 md:h-72">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-6 text-center">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-black leading-snug">
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
