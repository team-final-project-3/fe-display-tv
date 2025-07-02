import React from "react";

const VideoPromo = () => {
  return (

    <div className="rounded-lg border-4 border-[#F27F0C] bg-white shadow-md overflow-hidden w-full h-full">
      <video
        className="w-full h-full object-cover"
        src="/videos/promo.mp4"
        autoPlay
        loop
        muted
      />
    </div>

  );
};

export default VideoPromo;
