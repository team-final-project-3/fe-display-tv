import React, { useEffect, useState } from "react";
import api from "../utils/api"; // pastikan path ini sesuai dengan struktur proyekmu

import { io } from "socket.io-client";

const socket = io(import.meta.env.VITE_API_SOCKET)

const TicketList = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await api.get("/queue/active-cs-customer");
        const data = res.data.filter(Boolean);
        setTickets(data);
      } catch (err) {
        console.error("Gagal mengambil data:", err);
        setTickets([]);
      }
    };

    fetchTickets();

    // Tambah antrean baru saat CS mengambil
    socket.on("queue:in-progress", (data) => {
      console.log("Data socket:", data);
      setTickets((prev) => {
        const existsIndex = prev.findIndex((t) => t.ticketNumber === data.ticketNumber);

        if (existsIndex !== -1) {
          const updated = [...prev];
          updated[existsIndex] = {
            ...updated[existsIndex],
            cs: data.cs || updated[existsIndex].cs,
            status: data.status,
            calledAt: data.calledAt,
          };
          return updated;
        }

        return [...prev, {
          ticketNumber: data.ticketNumber,
          cs: data.cs || { name: "-" },
          status: data.status,
          calledAt: data.calledAt,
        }];
      });
    });

    // Hapus antrean jika status selesai/dibatalkan
    socket.on("queue:status-updated", (data) => {
      setTickets((prev) =>
        prev.filter((t) => t.ticketNumber !== data.ticketNumber)
      );
    });

    return () => {
      socket.off("queue:in-progress");
      socket.off("queue:status-updated");
    };
  }, []);

  const displayedTickets =
    tickets.length > 0 ? tickets : [{ cs: { name: "-" }, ticketNumber: "-" }];

  return (
    <div className="w-full px-6 py-2 bg-white rounded-xl shadow flex flex-col gap-3">
      {displayedTickets.map((item, idx) => (
        <div
          key={idx}
          className="w-full bg-white px-4 py-3 rounded-xl shadow-sm border border-orange-200 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1"
        >
          <p className="text-sm sm:text-base font-medium text-gray-800 text-left">
            CS: {item.cs?.name || "-"}
          </p>
          <p className="text-xl sm:text-2xl font-bold text-black text-right whitespace-nowrap overflow-hidden text-ellipsis">
            {item.ticketNumber || "-"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TicketList;
