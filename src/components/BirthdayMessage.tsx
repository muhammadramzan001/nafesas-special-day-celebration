
import React from 'react';

const BirthdayMessage = () => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tighter">
        <span className="inline-block animate-pulse-scale">
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 text-transparent bg-clip-text">
            Happy Birthday Nafesa
          </span>
        </span>
      </h1>
      <div className="flex justify-center items-center gap-2 mb-4">
        <span className="text-3xl">🎂</span>
        <span className="text-3xl">🎈</span>
        <span className="text-3xl">🌸</span>
        <span className="text-3xl">💖</span>
        <span className="text-3xl">✨</span>
      </div>
      <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto text-pink-800 dark:text-pink-200 animate-float">
        Celebrate your birthday with all the joy and happiness you deserve!
      </p>
    </div>
  );
};

export default BirthdayMessage;
