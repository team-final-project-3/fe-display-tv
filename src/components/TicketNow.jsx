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

    // Saat antrian dipanggil, ambil ulang data lengkap dari backend
    socket.on("queue:called", () => {
      fetchTicketNow();
    });

    // Saat antrian di-take (berubah status), sembunyikan jika sesuai
    socket.on("queue:in-progress", (data) => {
      fetchTicketNow();
      // setTicketNumber((current) =>
      //   current === data.ticketNumber ? "-" : current
      // );
      // setCsName((current) =>
      //   current === data.ticketNumber ? "-" : current
      // );
    });

    // Saat antrian diskip, refresh ulang juga
    socket.on("queue:status-updated", (data) => {
      fetchTicketNow();
    });

    return () => {
      socket.off("queue:called");
      socket.off("queue:in-progress");
      socket.off("queue:status-updated");
    };
  }, []);

  return (
    <div className="w-full bg-white border-4 border-[#FF8C00] text-[#FF6600] rounded-xl shadow flex flex-col items-center justify-center px-8 py-8">
      <p className="text-lg sm:text-xl md:text-2xl font-bold mb-3 uppercase text-center">
        Nomor Antrean
      </p>

      {csName && csName !== "-" && (
        <p className="text-sm sm:text-base md:text-lg text-gray-600 font-medium mb-1 text-center">
          CS: {csName}
        </p>
      )}

      <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#01202F] text-center whitespace-nowrap overflow-hidden text-ellipsis">
        {ticketNumber}
      </p>
    </div>
  );
};

export default TicketNow;
