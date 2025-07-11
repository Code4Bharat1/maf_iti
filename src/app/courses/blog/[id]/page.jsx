'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import axios from 'axios';

export default function BlogPostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/admin/blogs/${id}`);
        setPost(res.data);
      } catch (err) {
        console.error('Failed to fetch blog:', err);
        setError('Failed to load blog post.');
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchBlog();
  }, [id]);

  if (loading) return <p className="text-center text-white">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!post) return <p className="text-center text-white">No blog found.</p>;

  return (
    <div className="bg-[#F4F9FF] py-12 text-[#1F2A44] min-h-screen relative overflow-hidden">
      {/* Fully left-stuck blue background */}
      <div className="absolute top-50 left-0 w-[300px] h-[420px] bg-[#132C4B] z-0 rounded-tr-md rounded-br-md" />

      <div className="max-w-5xl mx-auto px-4 relative z-15">
        <h1 className="text-4xl  font-bold mb-6">{post.title}</h1>
        <p className="text-black mb-4 text-2xl">{post.date}</p>

        {/* Image overlapping blue box, shifted up and left */}
        <div className="relative w-fit mb-10 mt-15 ml-0 sm:ml-[-50px] md:ml-[-100px] lg:ml-[-150px]">
          <Image
            src={post.image || '/7e09083c-fa93-4e7f-a338-f601f98a990f.png'}
            alt={post.title}
            width={600}
            height={300}
            className="rounded-md shadow-lg"
          />
        </div>

       
        {/* Blog content with custom styling */}
        <div
          className="
            max-w-none
            space-y-6
            text-[#1F2A44]
            text-lg md:text-xl lg:text-2xl
            leading-relaxed
            [&_*]:text-[#1F2A44]
            [&_h1]:text-3xl [&_h1]:font-bold
            [&_h2]:text-2xl [&_h2]:font-bold
            [&_h3]:text-xl [&_h3]:font-semibold
            [&_p]:text-[#1F2A44]
            [&_ul]:list-disc [&_ul]:ml-6
            [&_li]:mb-2
            [&_a]:text-[#1F2A44] [&_a]:underline
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
}
