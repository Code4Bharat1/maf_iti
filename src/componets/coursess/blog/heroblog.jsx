'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Blogs() {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/admin/blogs');
        setBlogs(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error('Error fetching blogs:', err);
        setError('Failed to load blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="bg-blue-100 py-12 px-4">
      <button
        onClick={() => router.push('/courses')}
        className="mb-6 flex items-center cursor-pointer text-[#1F2C56] hover:text-blue-700 transition-colors duration-200"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </button>

      <h2 className="text-center text-2xl md:text-3xl font-bold text-[#1a264f] mb-10">
        Read Our Latest Blogs
      </h2>

      <div className="bg-[#1a264f] max-w-6xl mx-auto p-8 rounded-lg space-y-10">
        {loading && <p className="text-center text-white">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {blogs.map((post) => (
          <div
            key={post._id}
            onClick={() => router.push(`/courses/blog/${post._id}`)}
            className="flex flex-col md:flex-row items-center gap-6 cursor-pointer hover:opacity-90 transition"
          >
            <Image
              src={post.image || '/placeholder.png'}
              alt={post.title}
              width={440}
              height={200}
              className="rounded-md object-cover"
            />
            <div className="text-white text-center md:text-left">
              <h3 className="text-3xl font-semibold text-[#FFDF35]">{post.title}</h3>
              <p className="text-xl bg-white text-black p-1 mt-2">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
