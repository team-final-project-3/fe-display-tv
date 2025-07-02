import React, { useEffect, useState } from "react";
import api from "../utils/api";
import { io } from "socket.io-client";

const socket = io(import.meta.env.VITE_API_SOCKET);

const TicketNow = () => {
  const [ticketNumber, setTicketNumber] = useState("-");
  const [csName, setCsName] = useState("-");

  useEffect(() => {
    const fetchTicketNow = async () => {
      try {
        const res = await api.get("/queue/called-customer-tv");
        const data = res.data;

        setTicketNumber(data?.ticketNumber || "-");
        setCsName(data?.csName || "-");
      } catch (err) {
        if (err.response?.status !== 404) {
          console.error("Gagal mengambil data giliran sekarang:", err);
        }
        setTicketNumber("-");
        setCsName("-");
      }
    };

    fetchTicketNow();

    socket.on("queue:called", fetchTicketNow);
    socket.on("queue:in-progress", fetchTicketNow);
    socket.on("queue:status-updated", fetchTicketNow);

    return () => {
      socket.off("queue:called");
      socket.off("queue:in-progress");
      socket.off("queue:status-updated");
    };
  }, []);

  return (
    <div className="w-full bg-white border-4 border-[#FF8C00] text-[#FF6600] rounded-xl shadow px-4 py-4 flex flex-col items-center justify-center text-center">
      <p className="text-base md:text-lg font-bold mb-8 uppercase">Nomor Antrean</p>

      {csName && csName !== "-" && (
        <p className="text-xs md:text-sm text-gray-600 font-medium mb-1">Dilayani oleh: {csName}</p>
      )}

      <p className="text-5xl md:text-6xl font-bold text-[#01202F] whitespace-nowrap overflow-hidden text-ellipsis">
        {ticketNumber}
      </p>
    </div>
  );
};

export default TicketNow;
