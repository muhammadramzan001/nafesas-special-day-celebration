
import React from 'react';
import { Heart, Cake, GiftIcon, Star, BalloonIcon, PartyPopper } from 'lucide-react';

const Stickers = () => {
  // Create multiple stickers with different positions and animations
  const stickers = [
    // Hearts
    { 
      element: <Heart className="text-pink-500 fill-pink-300" />, 
      position: "top-1/4 left-1/5", 
      animation: "animate-float", 
      size: "w-10 h-10"
    },
    { 
      element: <Heart className="text-red-500 fill-red-300" />, 
      position: "bottom-1/4 right-1/5", 
      animation: "animate-float-horizontal", 
      size: "w-8 h-8"
    },
    // Cake
    { 
      element: <Cake className="text-amber-500" />, 
      position: "top-1/3 right-1/4", 
      animation: "animate-bounce-slow", 
      size: "w-12 h-12"
    },
    // Gift
    { 
      element: <GiftIcon className="text-purple-500 fill-purple-200" />, 
      position: "bottom-1/3 left-1/4", 
      animation: "animate-pulse-scale", 
      size: "w-14 h-14"
    },
    // Stars
    { 
      element: <Star className="text-yellow-400 fill-yellow-300" />, 
      position: "top-10 right-10", 
      animation: "animate-spin-slow", 
      size: "w-8 h-8"
    },
    { 
      element: <Star className="text-yellow-400 fill-yellow-300" />, 
      position: "bottom-10 left-10", 
      animation: "animate-spin-slow", 
      size: "w-6 h-6"
    },
    // Balloons
    { 
      element: <BalloonIcon className="text-blue-500 fill-blue-300" />, 
      position: "top-1/4 right-1/6", 
      animation: "animate-float", 
      size: "w-10 h-10"
    },
    { 
      element: <BalloonIcon className="text-pink-500 fill-pink-300" />, 
      position: "bottom-1/4 left-1/6", 
      animation: "animate-float-horizontal", 
      size: "w-12 h-12"
    },
    // Party Poppers
    { 
      element: <PartyPopper className="text-amber-500 fill-amber-300" />, 
      position: "top-10 left-10", 
      animation: "animate-bounce-slow", 
      size: "w-12 h-12"
    },
    { 
      element: <PartyPopper className="text-green-500 fill-green-300" />, 
      position: "bottom-10 right-10", 
      animation: "animate-pulse-scale", 
      size: "w-10 h-10"
    }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {stickers.map((sticker, index) => (
        <div 
          key={index} 
          className={`absolute ${sticker.position} ${sticker.animation} ${sticker.size} opacity-80`}
          style={{ animationDelay: `${index * 0.5}s` }}
        >
          {sticker.element}
        </div>
      ))}
    </div>
  );
};

export default Stickers;
