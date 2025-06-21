'use client';

import React from 'react';
import Image from 'next/image';

export default function OurManagement() {
  return (
    <div className=" bg-[#F4F9FF] text-gray-800 flex flex-col justify-between font-sans py-10 px-4 max-w-8xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">Our Management</h2>

      {/* President Section */}
      <div className="grid md:grid-cols-2 gap-6 items-center mb-12">
        <div className="bg-[#0f172a] p-2">
          <Image
            src="/aboutus/president.png"
            alt="President"
            width={200}
            height={221}
            className="object-cover w-full h-auto"
          />
        </div>
        <div>
          <h3 className="font-bold text-lg">President</h3>
          <p className="font-semibold mb-2">Mr. Saifullah Hasanmiya Firfire</p>
          <p className="text-2xl text-gray-700 leading-relaxed">
            In modern day world globalization is unavoidable & education is crucial for economic success in this
            globalized world. With keeping this in mind I established this institute 19 years ago to empower rural
            youth to shape a better future.
          </p>
        </div>
      </div>

      {/* Chairman Section */}
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h3 className="font-bold text-lg">Chairman</h3>
          <p className="font-semibold mb-2">Mr. Awab Habib Fakih</p>
          <p className="text-2xl text-gray-700 leading-relaxed">
            I believe that technical education is crucial for industry & our institute aims to provide skilled
            craftsmen to meet industry’s demands & offer self-employment opportunities. It’s a sure success
            destination for those aiming to excel in today’s industrial landscape.
          </p>
        </div>
        <div className="bg-[#0f172a] p-2">
          <Image
            src="/aboutus/chairman.png"
            alt="Chairman"
            width={200}
            height={250}
            className="object-cover w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
