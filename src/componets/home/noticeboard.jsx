'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function NoticeNewsSection() {
  const [notices, setNotices] = useState([]);
  const [news, setNews] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const [noticeRes, newsRes] = await Promise.all([
          axios.get('http://localhost:5000/api/admin/notices'),
          axios.get('http://localhost:5000/api/admin/news'),
        ]);

        setNotices(noticeRes.data || []);
        setNews(newsRes.data || []);
      } catch (err) {
        console.error('Error fetching notices or news:', err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col md:flex-row border border-blue-200 rounded-md overflow-hidden">
      {/* Left Side: Notice Board */}
      <div className="bg-[#1a264f] text-[#FFD700] w-full md:w-4/5 p-6">
        <div className="flex justify-center items-center mb-4">
          <div className="notice-arrow bg-[#FFD700] text-black text-xl font-bold px-8 py-3 w-fit">
            NOTICE BOARD
          </div>
        </div>

        <style jsx>{`
          .notice-arrow {
            clip-path: polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%);
          }
        `}</style>

        <div className='space-y-8 mx-10 mt-10 mb-10 text-sm md:text-2xl'>
          {notices.map((notice, index) => (
            <div key={index} className='flex gap-3'>
              <span className='text-2xl'>•</span>
              <span className="break-words">{notice.description}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side: Latest News */}
      <div className="bg-white text-black w-full md:w-3/5 p-6">
        <h3 className="text-2xl underline text-center font-medium mb-4">LATEST NEWS</h3>

        <div className="space-y-4 mt-8 text-sm md:text-2xl mx-6">
          {news.map((item, index) => (
            <div key={index} className="flex gap-3">
              <span className="text-xl">•</span>
              <span className="break-words">{item.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
