import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleBackToQueue = () => {
    navigate("/antrean"); // Kembali ke halaman antrean (Dashboard)
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-[#FFF7CC] px-6">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-2xl font-semibold mb-2">Halaman tidak ditemukan</p>
      <p className="text-gray-700 mb-6">
        Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
      </p>
      <button
        onClick={handleBackToQueue}
        className="bg-[#F27F0C] hover:bg-[#d66d00] text-white px-6 py-3 rounded-lg shadow-md transition duration-300 cursor-pointer"
      >
        🔙 KEMBALI KE ANTREAN
      </button>
    </div>
  );
};

export default NotFoundPage;
