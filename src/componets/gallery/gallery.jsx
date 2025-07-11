'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

export default function GalleryPage() {
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/admin/media/images');
        console.log('API response:', res.data); // ✅ [{...}]console.log("API response:", res.data);
res.data.forEach(img => console.log(img));

        if (Array.isArray(res.data)) {
          setGalleryImages(res.data);
        } else {
          setGalleryImages([]);
        }
      } catch (err) {
        console.error('Error fetching images:', err);
        setGalleryImages([]);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="bg-[#F4F8FC] min-h-screen">
      <h2 className="text-4xl font-extrabold text-center text-[#1F2C56] py-10">
        Gallery
      </h2>

    <div className="max-w-7xl mx-auto px-2 pb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
  {galleryImages.map((image, index) => (
    image.imageUrl ? ( // ✅ ensure it exists
      <div key={index} className="w-full">
        <img
          src={image.imageUrl}  // ✅ use your exact field
          alt={`image ${index + 1}`}
          width={500}
          height={400}
          className="w-full h-auto object-cover"
        />
      </div>
    ) : null
  ))}
</div>
    </div>
  );
}