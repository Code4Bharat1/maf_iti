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
    <div className="flex flex-col lg:flex-row rounded-md border border-blue-200 overflow-hidden shadow-md">
      {/* Notice Board */}
      <div className="bg-[#1a264f] text-[#FFD700] w-full lg:w-2/3 p-4 sm:p-6">
        {/* Header */}
        <div className="flex justify-center items-center mb-6">
          <div className="notice-arrow bg-[#FFD700] text-black font-bold text-base sm:text-lg md:text-xl px-6 py-2 sm:px-8 sm:py-3">
            NOTICE BOARD
          </div>
        </div>

        <style jsx>{`
          .notice-arrow {
            clip-path: polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%);
          }
        `}</style>

        {/* Content */}
        <div className="space-y-5 sm:space-y-6 px-4 sm:px-6 text-sm sm:text-base md:text-lg">
          {notices.length > 0 ? (
            notices.map((notice, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-lg sm:text-2xl">•</span>
                <span className="break-words">{notice.description}</span>
              </div>
            ))
          ) : (
            <p className="text-white">No notices available at the moment.</p>
          )}
        </div>
      </div>

      {/* Latest News */}
      <div className="bg-white text-black w-full lg:w-1/3 p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold underline text-center mb-4">
          LATEST NEWS
        </h3>

        <div className="space-y-5 sm:space-y-6 px-2 sm:px-4 text-sm sm:text-base md:text-lg">
          {news.length > 0 ? (
            news.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-lg sm:text-xl">•</span>
                <span className="break-words">{item.description}</span>
              </div>
            ))
          ) : (
            <p>No latest news to display.</p>
          )}
        </div>
      </div>
    </div>
  );
}
