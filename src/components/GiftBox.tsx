
import React from 'react';
import { GiftIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GiftBox = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/surprise');
  };

  return (
    <div className="text-center mb-8">
      <button
        onClick={handleClick}
        className="relative p-8 rounded-xl bg-gradient-to-br from-pink-400 to-purple-500 shadow-xl hover:shadow-2xl transition-all duration-300 animate-bounce-slow hover:animate-none group"
        aria-label="Click for surprise"
      >
        <GiftIcon className="w-16 h-16 text-white group-hover:scale-110 transition-transform" />
        <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          Click!
        </div>
      </button>
      <p className="mt-4 text-xl font-medium text-pink-900 dark:text-pink-200 animate-pulse">Click for Surprise</p>
    </div>
  );
};

export default GiftBox;
