import React, { useEffect, useState, useRef } from "react";
import api from "../utils/api";

const TicketList = () => {
  const [tickets, setTickets] = useState([
    { csLabel: "Customer service A", ticketNumber: "-" },
    { csLabel: "Customer service B", ticketNumber: "-" },
    { csLabel: "Customer service C", ticketNumber: "-" },
  ]);

  const prevDataRef = useRef(tickets); // simpan cache data sebelumnya

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await api.get("/queue/active-cs-customer");
        const data = res.data;

        if (data.length === 0) return;

        // Urutkan berdasarkan cs.id
        const sorted = [...data].sort((a, b) => a.cs.id - b.cs.id);
        const ids = sorted.map((item) => item.cs.id);
        const uniqueIds = [...new Set(ids)];

        // Ambil 3 id terurut: [min, tengah, max]
        const selectedIds = [
          uniqueIds[0],
          uniqueIds[Math.floor(uniqueIds.length / 2)],
          uniqueIds[uniqueIds.length - 1],
        ];

        const uniqueSelectedIds = [...new Set(selectedIds)];

        const newTickets = ["A", "B", "C"].map((label, index) => {
          const id = uniqueSelectedIds[index];
          const match = sorted.find((item) => item.cs.id === id);
          return {
            csLabel: `Customer service ${label}`,
            ticketNumber: match?.ticketNumber || "-",
          };
        });

        setTickets(newTickets);
        prevDataRef.current = newTickets;
      } catch (err) {
        console.error("Gagal mengambil data antrian CS aktif:", err);
        setTickets(prevDataRef.current);
      }
    };

    fetchTickets();
  }, []); // ✅ hanya dijalankan sekali saat mount

  return (
    <div className="flex justify-center gap-6 mt-4">
      {tickets.map((t, i) => (
        <div
          key={i}
          className="bg-gradient-to-r from-orange-400 to-orange-300 text-white px-6 py-4 rounded-lg shadow-md text-center min-w-[160px]"
        >
          <p className="text-sm mb-1">{t.csLabel}</p>
          <p className="text-2xl font-bold">{t.ticketNumber}</p>
        </div>
      ))}
    </div>
  );
};

export default TicketList;
