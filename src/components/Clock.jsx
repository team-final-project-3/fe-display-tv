import React, { useEffect, useState } from "react";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer); // cleanup
  }, []);

  const formatTime = (date) =>
    date.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

  const formatDate = (date) =>
    date.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

  return (
    <div className="bg-orange-500 text-white text-center px-4 py-3 rounded-md shadow-md w-full">
      <p className="text-3xl font-mono font-semibold">
        {formatTime(currentTime)}
      </p>
      <p className="text-base">{formatDate(currentTime)}</p>
    </div>
  );
};

export default Clock;
