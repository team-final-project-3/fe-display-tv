import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Clock from "../components/Clock";
import VideoPromo from "../components/VideoPromo";
import RunningText from "../components/RunningText";

const Dashboard = () => {
  const currentAntrian = "A-000"; // dummy, bisa nanti dihandle oleh prop atau context

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-black font-sans overflow-hidden">
      <Navbar />

      <div className="px-6 pt-4">
        <Header />

        <div className="grid grid-cols-3 gap-6 my-6">
          {/* Panel kiri: Antrian Aktif */}
          <div className="col-span-2 bg-gradient-to-r from-orange-500 to-orange-300 rounded-lg p-8 shadow text-white flex flex-col justify-center items-center">
            <p className="text-3xl font-semibold mb-2">CUSTOMER SERVICE - A</p>
            <p className="text-[120px] font-bold tracking-widest leading-none">
              {currentAntrian}
            </p>
          </div>

          {/* Panel kanan: Clock + Video */}
          <div className="flex flex-col gap-6">
            <Clock />
            <VideoPromo />
          </div>
        </div>

        {/* Daftar Customer Service Aktif */}
        <div className="flex justify-center mt-6 gap-6">
          {[
            { name: "Customer service A", ticket: "A - 015" },
            { name: "Customer service B", ticket: "A - 014" },
            { name: "Customer service C", ticket: "A - 013" },
          ].map((cs, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-orange-400 to-orange-300 text-white px-6 py-4 rounded-lg shadow-md text-center"
            >
              <p className="text-sm mb-1">{cs.name}</p>
              <p className="text-2xl font-bold">{cs.ticket}</p>
            </div>
          ))}
        </div>

        {/* Running Promo Text */}
        <div className="mt-6">
          <RunningText />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
