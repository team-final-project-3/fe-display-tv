import React from "react";

const VideoPromo = () => {
  return (
    <div className="w-full rounded-lg shadow overflow-hidden">
      <video
        src="/videos/promo.mp4" // pastikan file ada di public/videos/
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default VideoPromo;
