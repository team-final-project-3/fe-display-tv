import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Clock from "../components/Clock";
import VideoPromo from "../components/VideoPromo";
import RunningText from "../components/RunningText";
import TicketNow from "../components/TicketNow";
import TicketList from "../components/TicketList"; // Optional: list CS A/B/C

const Dashboard = () => {
  return (
    <div className="h-screen w-screen grid grid-rows-[auto_1fr_auto] bg-[#F7F6F2] text-black font-sans overflow-hidden">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <div className="px-6 py-4 overflow-hidden flex flex-col justify-between">
        <Header />

        <div className="grid grid-cols-3 gap-6 my-4 flex-grow">
          {/* Left Panel: TicketNow Box */}
          <div className="col-span-2 bg-gradient-to-r from-orange-500 to-orange-300 rounded-lg p-8 shadow text-white flex flex-col justify-center items-center">
            <TicketNow />
          </div>

          {/* Right Panel: Clock and Video */}
          <div className="flex flex-col gap-6 justify-between">
            <Clock />
            <VideoPromo />
          </div>
        </div>

        {/* Bottom Section: TicketList if needed */}
        <TicketList />
      </div>

      {/* Footer Running Text */}
      <RunningText />
    </div>
  );
};

export default Dashboard;
