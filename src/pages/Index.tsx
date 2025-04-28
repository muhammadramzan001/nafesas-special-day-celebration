
import React from 'react';
import ProfileImage from '../components/ProfileImage';
import BirthdayMessage from '../components/BirthdayMessage';
import LoveMessage from '../components/LoveMessage';
import GiftBox from '../components/GiftBox';
import Confetti from '../components/Confetti';
import Stickers from '../components/Stickers';
import MusicPlayer from '../components/MusicPlayer';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center p-4 md:p-8">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-pink-100 via-pink-200 to-purple-300 z-[-1]"></div>
      
      {/* Animated Background Elements */}
      <Confetti />
      <Stickers />
      <MusicPlayer />
      
      {/* Content Container */}
      <div className="max-w-4xl w-full mx-auto py-8 px-4 flex flex-col items-center">
        <ProfileImage />
        <BirthdayMessage />
        <LoveMessage />
        <GiftBox />
      </div>
    </div>
  );
};

export default Index;
