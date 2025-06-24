'use client';

import React from 'react';

const videoData = [
  {
    title: 'Campus View',
    src: 'https://www.youtube.com/embed/VIDEO_ID_1',
  },
  {
    title: 'Student Interview',
    src: 'https://www.youtube.com/embed/VIDEO_ID_2',
  },
  {
    title: 'Computer Class',
    src: 'https://www.youtube.com/embed/VIDEO_ID_3',
  },
  {
    title: 'NCC Parade',
    src: 'https://www.youtube.com/embed/VIDEO_ID_4',
  },
];

export default function VideoGallery() {
  return (
    <section className="bg-[#e8f0fc] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a264f] mb-10">
          Video Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {videoData.map((video, index) => (
            <div key={index} className="w-full aspect-square">
              <iframe
                src={video.src}
                title={video.title}
                allowFullScreen
                className="w-full h-full rounded-lg shadow-md"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
