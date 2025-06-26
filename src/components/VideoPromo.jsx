import React from "react";

const VideoPromo = () => {
  return (
    <div className="w-full aspect-video  rounded-lg flex items-center justify-center shadow-lg">
      <video
        src="/videos/promo.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-[90%] h-auto object-contain rounded-md"
      />
    </div>
  );
};

export default VideoPromo;
