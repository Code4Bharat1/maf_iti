'use client';

import Image from 'next/image';
import React from 'react';

export default function About() {
  return (
    <div className="bg-[#f3f8ff] text-gray-800 font-sans py-15 px-6 max-w-8xl">
      {/* Image Box */}
      <div className="border-4 border-blue-200 rounded-md overflow-hidden shadow-lg">
        <Image
          src="/aboutus/img1.png"
          alt="Mehrunnisa Abbas Fakih ITI"
          width={1466}
          height={757}
          className="w-full h-auto"
        />
      </div>

      {/* About Section */}
      <div className="mt-10 max-w-8xl px-15 py-6">
        <h2 className="text-2xl font-bold  text-gray-900 mb-4">About us</h2>
        <p className="text-justify  text-gray-700">
          Anjuman Waseeul Taleem Educational Trust, Raigad is a reputed institution in the Konkan region,
          dedicated to the educational upliftment of society. Established in Mazgaon, Murud (Raigad), the
          Trust founded Mehrunnisa Abbas Fakih ITI in 2006 to provide technical education to rural and
          underprivileged youth. The foundation was laid by Mr. P. A. Inamdar under the chairmanship of
          Mr. Habib Fakih. The institute is affiliated with NCVT, DGET, and recognised by the Govt. of
          Maharashtra under the Craftsman Training Scheme (CTS).
        </p>
      </div>
    </div>
  );
}
