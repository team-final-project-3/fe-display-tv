import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Clock from "../components/Clock";
import VideoPromo from "../components/VideoPromo";
import RunningText from "../components/RunningText";
import TicketNow from "../components/TicketNow";
import TicketList from "../components/TicketList";

const Dashboard = () => {
  return (
    <div className="h-screen w-screen bg-[#F7F6F2] text-black font-sans overflow-hidden grid grid-rows-[auto_1fr_auto]">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Section */}
      <div className="p-4 flex flex-col gap-4">
        {/* Top Header (Logo + Clock) */}
        <div className="flex justify-between items-center">
          <Header />
          <div className="w-[240px]">
            <Clock />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-3 gap-4 flex-grow">
          {/* Ticket Now */}
          <div className="col-span-2 bg-gradient-to-r from-orange-500 to-orange-300 rounded-lg p-6 shadow-lg flex items-center justify-center">
            <TicketNow />
          </div>

          {/* Video Promo */}
          <div className="flex flex-col gap-4">
            <div className="flex-1">
              <VideoPromo />
            </div>
          </div>
        </div>

        {/* Ticket List */}
        <TicketList />
      </div>

      {/* Running Text Bottom Bar */}
      <RunningText />
    </div>
  );
};

export default Dashboard;
