
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import Confetti from '../components/Confetti';

const Surprise = () => {
  useEffect(() => {
    // Add on-enter effects here if needed
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-200 via-pink-200 to-red-200 z-[-1]"></div>
      
      {/* Confetti Animation */}
      <Confetti />
      
      {/* Floating Hearts */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <Heart 
            key={i} 
            className={`absolute text-red-500 fill-pink-300 animate-float w-${Math.floor(Math.random() * 10) + 5} h-${Math.floor(Math.random() * 10) + 5} opacity-${Math.floor(Math.random() * 70) + 30}`}
            style={{ 
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 5 + 5}s`
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="max-w-3xl w-full px-4 py-10 bg-white/40 backdrop-blur-md rounded-2xl shadow-2xl animate-pulse-scale">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
          My Dearest Nafesa...
        </h1>
        
        <div className="space-y-6 text-lg md:text-xl font-medium text-gray-800 leading-relaxed">
          <p className="animate-fade-in">
            On your special day, I want to remind you how incredibly precious you are to me. 
            Every moment with you feels like a gift that I cherish deeply.
          </p>
          
          <p className="animate-fade-in" style={{animationDelay: "0.3s"}}>
            Your smile lights up my world in ways I never thought possible. 
            The way you see the beauty in everything inspires me every day.
          </p>
          
          <p className="animate-fade-in" style={{animationDelay: "0.6s"}}>
            I promise to stand by your side through every journey, to hold your hand 
            through every adventure, and to love you more with each passing day.
          </p>
          
          <div className="text-center pt-6 animate-fade-in" style={{animationDelay: "0.9s"}}>
            <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Happy Birthday, My Love! ❤️
            </p>
          </div>
        </div>
      </div>
      
      {/* Back Button */}
      <Link 
        to="/" 
        className="mt-8 px-6 py-3 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-medium shadow-md hover:shadow-lg transition-all duration-200"
      >
        Return to Birthday Card
      </Link>
    </div>
  );
};

export default Surprise;
