import React from "react";
import Navbar from "../components/Navbar";
import VideoPromo from "../components/VideoPromo";
import TicketNow from "../components/TicketNow";
import TicketList from "../components/TicketList";
import RunningText from "../components/RunningText";
import Header from "../components/Header";
import ExchangeRate from "../components/ExchangeRate";

const Dashboard = () => {
  return (
    <div className="h-screen w-screen bg-[#FFF7CC] text-black font-sans flex flex-col overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Konten Tengah */}
      <div className="flex-1 flex flex-col gap-2 py-2 overflow-hidden">
        <div className="flex-1 max-w-screen-xl mx-auto w-full flex flex-row gap-3 overflow-hidden px-1">

          {/* KIRI */}
          <div className="flex-[1_1_0%] flex flex-col justify-start items-stretch gap-3 overflow-hidden">
            <Header />
            <TicketNow />
            <TicketList />
          </div>

          {/* KANAN */}
          <div className="flex-[1_1_0%] flex flex-col justify-start items-stretch gap-3 overflow-hidden">
            <div className="w-full h-[380px]">
              <VideoPromo />
            </div>
            <ExchangeRate />
          </div>
        </div>
      </div>

      {/* Running Text */}
      <RunningText />
    </div>
  );
};

export default Dashboard;
