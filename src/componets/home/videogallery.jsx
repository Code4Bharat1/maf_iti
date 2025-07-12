'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function VideoGallery() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get('https://iti-api.nexcorealliance.com/api/admin/media/videos');
        if (Array.isArray(res.data)) {
          console.log("Fetched videos:", res.data);

          setVideos(res.data);
          
        } else {
          setVideos([]); // Agar kuch galat aaye toh empty list
        }
      } catch (err) {
        console.error('Failed to fetch videos:', err);
        setError('Failed to load videos.');
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return (
    <section className="bg-[#f5f9ff] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-[#1a264f] mb-10">
          Video Gallery
        </h2>

        {loading && (
          <p className="text-center text-[#1a264f]">Loading videos...</p>
        )}

        {error && (
          <p className="text-center text-red-500">{error}</p>
        )}

        {videos.length === 0 && !loading && !error && (
          <p className="text-center text-[#1a264f]">No videos available.</p>
        )}

{/* <div className="grid grid-cols-1 sm:grid-cols-5 md:grid-cols-5 gap-6">
  {videos.map((video) => (
    <div key={video._id} className="flex flex-col items-center gap-2">
      <div className="w-full rounded overflow-hidden shadow border border-gray-300">
        <video
          src={`https://iti-api.nexcorealliance.com${video.videoUrl}`}
          controls
          className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-contain bg-black"
        />
      </div>
   
    </div>
  ))}
</div> */}
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
{videos.map((video) => (
  <div key={video._id} className="flex flex-col items-center gap-2">
    <div className="w-full rounded overflow-hidden shadow border border-gray-300">
      <video
        src={video.videoUrl} // ✅ Ensure full path
        controls
        className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-contain bg-black"
        onClick={(e) => {
          if (e.target.readyState >= 2) {
            e.target.play(); // ✅ Only play if video is loaded
          }
        }}
      />
    </div>
 
  </div>
))}

</div>


      </div>
    </section>
  );
}