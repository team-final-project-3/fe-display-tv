import React, { useEffect, useState } from "react";
import api from "../utils/api";
import { io } from "socket.io-client";

const socket = io("https://temucs-tzaoj.ondigitalocean.app")
// const socket = io("http://localhost:3000/api"); 

const TicketNow = () => {
  const [ticketNumber, setTicketNumber] = useState("-");

  useEffect(() => {
    const fetchTicketNow = async () => {
      try {
        const res = await api.get("/queue/called-customer-tv");
        const data = res.data;
        setTicketNumber(data?.ticketNumber || "-");
      } catch (err) {
        if (err.response?.status !== 404) {
          console.error("Gagal mengambil data giliran sekarang:", err);
        }
        setTicketNumber("-");
      }
    };

    fetchTicketNow();

    // Event: antrian dipanggil
    socket.on("queue:called", (data) => {
      setTicketNumber(data?.ticketNumber || "-");
    });

    // Event: antrian ditake
    socket.on("queue:in-progress", (data) => {
      setTicketNumber((current) =>
        current === data.ticketNumber ? "-" : current
      );
    });

    return () => {
      socket.off("queue:called");
      socket.off("queue:in-progress");
    };
  }, []);

  return (
    <div className="w-full bg-white border-4 border-[#FF8C00] text-[#FF6600] rounded-xl shadow flex flex-col items-center justify-center px-8 py-8">
      <p className="text-lg sm:text-xl md:text-2xl font-bold mb-3 uppercase text-center">
        Nomor Antrean
      </p>
      <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#01202F] text-center whitespace-nowrap overflow-hidden text-ellipsis">
        {ticketNumber}
      </p>
    </div>

  );
};

export default TicketNow;
