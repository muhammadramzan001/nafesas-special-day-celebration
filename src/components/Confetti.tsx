
import React, { useEffect, useState } from 'react';

interface ConfettiPiece {
  id: number;
  color: string;
  x: string;
  delay: string;
  duration: string;
  size: string;
  rotation: string;
}

const Confetti = () => {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const colors = [
      'bg-pink-500', 'bg-purple-500', 'bg-blue-500', 'bg-yellow-500', 
      'bg-green-500', 'bg-red-500', 'bg-orange-500', 'bg-indigo-500'
    ];
    
    const newConfetti: ConfettiPiece[] = [];
    
    for (let i = 0; i < 50; i++) {
      newConfetti.push({
        id: i,
        color: colors[Math.floor(Math.random() * colors.length)],
        x: `${Math.random() * 100}%`,
        delay: `${Math.random() * 3}s`,
        duration: `${3 + Math.random() * 4}s`,
        size: `${5 + Math.random() * 10}px`,
        rotation: `${Math.random() * 360}deg`,
      });
    }
    
    setConfetti(newConfetti);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className={`absolute ${piece.color} opacity-70`}
          style={{
            left: piece.x,
            top: "-20px",
            width: piece.size,
            height: piece.size,
            animationDelay: piece.delay,
            animationDuration: piece.duration,
            transform: `rotate(${piece.rotation})`,
            animation: "confetti-fall forwards",
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
