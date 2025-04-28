
import React from 'react';

const LoveMessage = () => {
  return (
    <div className="max-w-xl mx-auto mb-8 px-6 py-6 rounded-lg bg-white/30 backdrop-blur-sm shadow-lg animate-pulse-scale">
      <p className="text-lg md:text-xl text-center font-medium leading-relaxed relative">
        <span className="absolute -top-4 -left-2 text-4xl opacity-60">❝</span>
        <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text font-semibold">
          You are the most beautiful smile of my life.
          Always stay happy and know that you are loved deeply every single day.
        </span>
        <span className="absolute -bottom-4 -right-2 text-4xl opacity-60">❞</span>
      </p>
    </div>
  );
};

export default LoveMessage;
