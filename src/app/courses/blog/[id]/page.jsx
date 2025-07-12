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
        const res = await axios.get(`https://iti-api.nexcorealliance.com/api/admin/blogs/${id}`);
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
    <div className="bg-[#1A3161] py-12 text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
        <p className="text-gray-300 mb-4">{post.date}</p>

        <Image
          src={post.image || '/placeholder.png'}
          alt={post.title}
          width={800}
          height={400}
          className="w-full h-auto rounded mb-6 object-cover"
        />

        <div
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
}
