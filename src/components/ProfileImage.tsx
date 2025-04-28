
import React from 'react';

const ProfileImage = () => {
  return (
    <div className="relative mx-auto w-56 h-56 md:w-64 md:h-64 mb-8">
      <div className="relative rounded-full overflow-hidden border-4 border-pink-300 shadow-lg">
        <img 
          src="/lovable-uploads/dde53620-3e6a-4401-9c0c-b31dcd325d5e.png" 
          alt="Nafesa's Image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProfileImage;

