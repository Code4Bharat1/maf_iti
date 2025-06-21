'use client';

import React from 'react';
import { Book, Briefcase, CheckCircle, Users } from 'lucide-react';

export default function Ourvision() {
  return (
    <div className="min-h-scrnee bg-[#F4F9FF] text-gray-800 font-sans py-15 px-6  max-w-8xl mx-auto">
      {/* Vision & Mission */}
      <div className="grid md:grid-cols-2 py-10 px-6  gap-6 mb-16">
        {/* Vision */}
        <div className="border-4 border-yellow-400 p-6 rounded-lg shadow-md bg-white">
          <h3 className="text-xl font-bold mb-3 text-gray-900">Our vision</h3>
          <p className="text-gray-700 leading-relaxed">
            To become a leading center of skill development in the Konkan region by empowering rural and underprivileged youth through quality technical education, fostering self-reliance, and building a stronger, skilled society.
          </p>
        </div>
        {/* Mission */}
        <div className="border-4 border-yellow-400 p-6 rounded-lg shadow-md bg-white">
          <h3 className="text-xl font-bold mb-3 text-gray-900">Our mission</h3>
          <p className="text-gray-700 leading-relaxed">
            To deliver practical and industry-relevant training that helps youth build sustainable careers. We strive to foster confidence, skill, and dignity among students from disadvantaged backgrounds, enabling them to lead successful lives.
          </p>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="bg-gray-900 text-white rounded-lg p-8 grid md:grid-cols-4 gap-6 text-center">
        <div>
          <Users className="mx-auto mb-3 w-8 h-8" />
          <p className="text-sm">Learn from certified and experienced faculty.</p>
        </div>
        <div>
          <Book className="mx-auto mb-3 w-8 h-8" />
          <p className="text-sm">Empowering students with leadership and life skills.</p>
        </div>
        <div>
          <Briefcase className="mx-auto mb-3 w-8 h-8" />
          <p className="text-sm">Strong placement support with leading companies.</p>
        </div>
        <div>
          <CheckCircle className="mx-auto mb-3 w-8 h-8" />
          <p className="text-sm">Clean, Disciplined, and student-friendly campus</p>
        </div>
      </div>
    </div>
  );
}
