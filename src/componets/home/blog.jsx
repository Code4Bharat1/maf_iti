'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const blogPosts = [
  {
    image: '/home/blog1.png',
    date: 'Wednesday, April 10, 2024',
    title: 'Unveiling the Craft of Draughtsman Civil: Architects of Structural Ingenuity',
    slug: 'draughtsman-civil',
  },
  {
    image: '/home/blog2.png',
    date: 'Wednesday, April 10, 2024',
    title: 'Exploring the Craft of Refrigeration & Air Conditioning Technicians (RACT): Masters of Climate Control',
    slug: 'refrigeration-ract',
  },
  {
    image: '/home/blog3.png',
    date: 'Wednesday, April 10, 2024',
    title: 'Exploring the Role and Importance of Draughtsman Mechanical',
    slug: 'draughtsman-mechanical',
  },
];

export default function BlogSection() {
  const router = useRouter();

  const handleViewAll = () => {
    router.push('/coursess/blog'); // Navigates to the blog listing page
  };

  const handlePostClick = (slug) => {
    router.push(`/coursess/blog/${slug}`); // Navigates to the individual blog post page
  };

  return (
    <div className="bg-[#1A3161] py-12 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              onClick={() => handlePostClick(post.slug)}
              className="cursor-pointer bg-[#1A3161] rounded-md text-center hover:scale-[1.02] transition-transform duration-300"
            >
              <Image
                src={post.image}
                alt="Blog"
                width={400}
                height={250}
                className="w-full h-[250px] object-cover rounded-md"
              />
              <p className="bg-white text-black font-semibold px-4 py-2 mt-4 inline-block rounded">
                {post.date}
              </p>
              <h3 className="text-lg mx-13 font-medium mt-3 px-2">{post.title}</h3>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button  
            onClick={handleViewAll}
            className="bg-yellow-400 cursor-pointer hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded"
          >
            View All
          </button>
        </div>
        
      </div>
    </div>
  );
}
