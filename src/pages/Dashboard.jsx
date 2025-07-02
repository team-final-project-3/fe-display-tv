// REFAKTOR DASHBOARD.js UNTUK FIT DI SATU LAYAR TANPA SCROLL DAN RAPIH SECARA VISUAL

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
      <div className="flex-1 flex flex-col gap-2 px-4 py-2 overflow-hidden">

        <div className="flex justify-between items-start gap-4 w-full box-border px-5">
          <div className="flex-1">
            <Header />
          </div>
          <div className="w-[648px] px-4" >
            <ExchangeRate />
          </div>
        </div>

        <div className="flex-1 max-w-screen-xl mx-auto w-full flex flex-col lg:flex-row gap-3 overflow-hidden">
          {/* KIRI */}
          <div className="flex-[1_1_0%] flex flex-col justify-start items-stretch gap-2 px-2 overflow-hidden">
            <div className="w-full">
              <TicketNow />
            </div>
            <div className="w-full">
              <TicketList />
            </div>
          </div>

          {/* KANAN */}
          <div className="flex-[1_1_0%] flex flex-col justify-between items-stretch gap-20 px-2 overflow-hidden">
            <div className="w-full flex-1">
              <VideoPromo />
            </div>
          </div>
        </div>
      </div>

      {/* Running Text */}
      <RunningText />
    </div>
  );
};

export default Dashboard;
