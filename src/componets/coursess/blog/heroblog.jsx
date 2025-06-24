'use client';
import Image from 'next/image';
import React from 'react';

export default function Blogs() {
  return (
    <div className="bg-blue-100 py-12 px-4">
      {/* Heading */}
      <h2 className="text-center text-2xl md:text-3xl font-bold text-[#1a264f] mb-10">
        Read Our Latest Blogs
      </h2>

      {/* Blog Container */}
      <div className="bg-[#1a264f] max-w-6xl mx-auto p-8 rounded-lg space-y-10">
        {/* Blog Item 1 */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Image
            src="/home/blog2.png" // replace with your image path
            alt="Draughtsman Civil"
            width={450}
            height={200}
            className="rounded-md"
          />
          <div className="text-white text-center md:text-center">
            <h3 className="text-lg font-semibold text-yellow-400">
              Unveiling the Craft of Draughtsman Civil: Architects of Structural Ingenuity
            </h3>
            <p className="text-md bg-white text-black mt-2">Wednesday, April 10, 2024</p>
          </div>
        </div>

        {/* Blog Item 2 */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Image
            src="/home/blog3.png" // replace with actual second image
            alt="RACT"
            width={650}
            height={200}
            className="rounded-md"
          />
          <div className="text-white text-center md:text-center">
            <h3 className="text-lg font-semibold text-yellow-400">
              Exploring the Craft of Refrigeration & Air Conditioning Technicians (RACT): Masters of Climate Control
            </h3>
            <p className="text-md bg-white text-black mt-2">Wednesday, April 10, 2024</p>
          </div>
        </div>

        {/* Blog Item 3 */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Image
            src="/home/blog1.png" // replace with actual third image
            alt="Draughtsman Mechanical"
            width={450}
            height={200}
            className="rounded-md"
          />
          <div className="text-white text-center md:text-center">
            <h3 className="text-lg font-semibold text-yellow-400">
              Exploring the Role and Importance of Draughtsman Mechanical
            </h3>
            <p className="text-md bg-white text-black mt-2">Wednesday, April 10, 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}
