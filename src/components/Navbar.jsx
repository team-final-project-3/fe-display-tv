import React, { useEffect, useState } from "react";
import bgBatik from "/src/assets/bg_batik.png";
import { FiLogOut } from "react-icons/fi"; // Feather icon logout
import logoBni from "../assets/logo_bni.png";

const Navbar = () => {
  const [time, setTime] = useState(new Date());

  // Auto-update waktu tiap detik
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString("id-ID", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const handleLogout = () => {
    // Hapus token atau data login dari localStorage/sessionStorage
    localStorage.removeItem("token");

    // Redirect ke halaman login (jika pakai React Router)
    window.location.href = "/";
  };

  return (
    <div
      className="relative w-full h-16 flex items-center justify-between overflow-hidden"
      style={{
        backgroundImage: `url(${bgBatik})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Logo kiri */}
      <div className="z-10 h-full bg-white px-4 flex items-center">
        <img src={logoBni} alt="BNI Logo" className="h-8 object-contain" />
      </div>

      {/* Tanggal & Jam + Logout kanan */}
      <div className="z-10 h-full bg-white px-4 py-2 flex items-center text-orange-600 font-bold shadow-2xl">
        <div className="flex flex-col items-end">
          <span className="text-base">{formatDate(time)}</span>
          <span className="text-4xl tracking-wider">{formatTime(time)}</span>
        </div>
        <button
          onClick={handleLogout}
          className="text-white hover:text-gray-300 transition"
          title="Logout"
        >
          <FiLogOut size={20} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
