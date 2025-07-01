import React from "react";
import Navbar from "../components/Navbar";
import VideoPromo from "../components/VideoPromo";
import TicketNow from "../components/TicketNow";
import TicketList from "../components/TicketList";
import RunningText from "../components/RunningText";
import Header from "../components/Header"

const Dashboard = () => {
  return (
    <div className="h-screen w-screen bg-[#FFF7CC] text-black font-sans overflow-hidden grid grid-rows-[auto_1fr_auto]">
      {/* Navbar */}
      <Navbar />

      {/* Konten Tengah */}
      <Header />
      <div className="flex-1 px-4 py-3">
        <div className="max-w-screen-xl mx-auto w-full h-full">
          <div className="grid grid-cols-2 gap-6 h-full">

            {/* KIRI */}
            <div className="flex flex-col items-center justify-center gap-3 h-full px-2">

              <div className="w-full max-w-3xl">
                <TicketNow />
              </div>
              <div className="w-full max-w-3xl">
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
      <RunningText />
    </div>
  );
};

export default Dashboard;
