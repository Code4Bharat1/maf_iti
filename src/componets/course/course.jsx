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

export default function Courses() {
  const router = useRouter();

  const handleViewAll = () => {
    router.push('/coursess/blog');
  };

  const handlePostClick = (slug) => {
    router.push(`/coursess/blog/${slug}`);
  };

  return (
    <div className="bg-[#F4F8FC] pt-10 px-4">
      {/* Our Trades Section */}
      <h2 className="text-3xl font-bold text-center text-[#1F2C56] mb-8">Our Trades</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white text-black shadow-md text-center rounded-lg overflow-hidden">
          <Image
            src="/aboutus/classroom2.png"
            alt="RACT"
            width={450}
            height={300}
            className="w-full h-[250px] object-cover"
          />
          <p className="font-semibold text-lg py-4">
            Refrigeration & Air Conditioning Technician (RACT)
          </p>
        </div>
        <div className="bg-white text-black shadow-md text-center rounded-lg overflow-hidden">
          <Image
            src="/aboutus/classroom1.png"
            alt="Draughtsman"
            width={450}
            height={300}
            className="w-full h-[250px] object-cover"
          />
          <p className="font-semibold text-lg py-4">Draughtsman Mechanical</p>
        </div>
        <div className="bg-white text-black shadow-md text-center rounded-lg overflow-hidden">
          <Image
            src="/aboutus/classroom3.png"
            alt="COPA"
            width={450}
            height={300}
            className="w-full h-[250px] object-cover"
          />
          <p className="font-semibold text-lg py-4">
            Computer Operator & Programming Assistant (COPA)
          </p>
        </div>
      </div>

      {/* Dubai Dry Docks Courses */}
      <div className="text-center my-12">
        <h2 className="text-3xl font-extrabold text-[#1F2C56] mb-6">Dubai Dry Docks Courses</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white text-black shadow-md text-center rounded-lg overflow-hidden">
            <Image
              src="/aboutus/mechanical.png"
              alt="Mechanical Fitter"
              width={450}
              height={300}
              className="w-full h-[250px] object-cover"
            />
            <p className="font-bold text-lg py-4">Mechanical Fitter</p>
          </div>
          <div className="bg-white text-black shadow-md text-center rounded-lg overflow-hidden">
            <Image
              src="/aboutus/marine.png"
              alt="Marine Welder"
              width={450}
              height={300}
              className="w-full h-[250px] object-cover"
            />
            <p className="font-bold text-lg py-4">Marine Welder</p>
          </div>
          <div className="bg-white text-black shadow-md text-center rounded-lg overflow-hidden">
            <Image
              src="/aboutus/Electrician.png"
              alt="Marine Electrician"
              width={450}
              height={300}
              className="w-full h-[250px] object-cover"
            />
            <p className="font-bold text-lg py-4">Marine Electrician</p>
          </div>
        </div>
      </div>

      {/* Blog Section (Dynamic) */}
<div className="bg-[#1F2C56] py-12 text-white text-center">
  <h2 className="text-3xl font-bold mb-10">Our Blog</h2>
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
    {blogPosts.map((post, index) => (
      <div
        key={index}
        onClick={() => handlePostClick(post.slug)}
        className="cursor-pointer hover:scale-[1.02] transition-transform duration-300"
      >
        <div className="bg-white rounded-t-md overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            width={450}
            height={300}
            className="w-full h-[200px] object-cover"
          />
        </div>
        <div className="bg-[#1F2C56] px-4 py-4 text-white">
          <div className="bg-white text-black font-semibold text-sm inline-block px-4 py-2 rounded mb-4">
            {post.date}
          </div>
          <h3 className="text-lg font-semibold leading-snug">
            {post.title}
          </h3>
        </div>
      </div>
    ))}
  </div>
  <button
    onClick={handleViewAll}
    className="mt-10 bg-[#FFD600] hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded"
  >
    View All
  </button>
</div>


      {/* Video Gallery Section */}
      <div className="text-center py-12 bg-[#F4F8FC]">
        <h2 className="text-3xl font-bold text-[#1F2C56] mb-8">Video Gallery</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 px-4">
          <Image
            src="/aboutus/1st.png"
            alt="Video 1"
            width={350}
            height={400}
            className="rounded-lg object-cover w-full h-[180px]"
          />
          <Image
            src="/aboutus/2nd.png"
            alt="Video 2"
            width={350}
            height={400}
            className="rounded-lg object-cover w-full h-[180px]"
          />
          <Image
            src="/aboutus/3rd.png"
            alt="Video 3"
            width={350}
            height={400}
            className="rounded-lg object-cover w-full h-[180px]"
          />
          <Image
            src="/aboutus/4th.png"
            alt="Video 4"
            width={350}
            height={400}
            className="rounded-lg object-cover w-full h-[180px]"
          />
        </div>
      </div>
    </div>
  );
}
