'use client'; // for Next.js client-side component
import React from 'react';
import { useTranslation } from 'react-i18next';


const CarVideos = () => {
  const { t } = useTranslation();
  // Replace with your own video IDs and start times (in seconds)
  const videos = [
    { videoId: 'VJ6xx8EAelg', startTime: 376 }, // Start at 10 seconds
    { videoId: 'b_s0KIA1Gqc', startTime: 0 } // Start at 20 seconds
  ];

  return (
    <section className="p-6 bg-white shadow-lg rounded-lg max-w-6xl mx-auto my-8">
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">
      {t('carVideos.title')}
      </h1>      
      <div className="grid grid-cols-2 gap-4">
        {videos.map((video, index) => (
          <div key={index} className="w-full h-64 relative">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${video.videoId}?start=${video.startTime}`}
              title={`Car Video ${index + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarVideos;
