import React from "react";
import Navbar from "../components/Navbar";
import VideoPromo from "../components/VideoPromo";
import TicketNow from "../components/TicketNow";
import TicketList from "../components/TicketList";

const Dashboard = () => {
  return (
    <div className="h-screen w-screen bg-[#FFF7CC] text-black font-sans overflow-hidden grid grid-rows-[auto_1fr_auto]">
      {/* Navbar */}
      <Navbar />

      {/* Konten Tengah */}
      <div className="flex-1 px-4 py-3">
        <div className="max-w-screen-xl mx-auto w-full h-full">
          <div className="grid grid-cols-2 gap-6 h-full">

            {/* KIRI */}
            <div className="flex flex-col items-center justify-center gap-4 h-full px-4">
              <div className="w-full max-w-2xl">
                <TicketNow />
              </div>
              <div className="w-full max-w-2xl">
                <TicketList />
              </div>
            </div>

            {/* KANAN */}
            <div className="flex items-center justify-center h-full">
              <VideoPromo />
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
