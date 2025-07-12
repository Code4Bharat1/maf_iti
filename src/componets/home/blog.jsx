'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function BlogSection() {
  const router = useRouter();

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/admin/blogs');
        setBlogs(Array.isArray(res.data) ? res.data : []);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch blogs:', err);
        setError('Failed to load blogs.');
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleViewAll = () => {
    router.push('/courses/blog');
  };

  const handlePostClick = (id) => {
    router.push(`/courses/blog/${id}`);
  };

  return (
    <div className="bg-[#1A3161] py-12 text-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10">
          Our Blog
        </h2>

        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((post, index) => (
              <div
                key={index}
                onClick={() => handlePostClick(post._id)}
                className="cursor-pointer bg-[#1A3161] rounded-md text-center hover:scale-[1.02] transition-transform duration-300"
              >
                <Image
                  src={post.image ? post.image : '/placeholder.png'}
                  alt="Blog"
                  width={400}
                  height={250}
                  className="w-full h-[220px] sm:h-[250px] object-cover rounded-t-md"
                />
                <p className="bg-white text-black font-medium px-4 py-2 mt-4 inline-block">
                  {post.date}
                </p>
                <h3 className="text-base sm:text-lg mx-4 sm:mx-12 font-medium mt-3 px-2">
                  {post.title}
                </h3>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <button
            onClick={handleViewAll}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded transition"
          >
            View All
          </button>
        </div>
      </div>
    </div>
  );
}
