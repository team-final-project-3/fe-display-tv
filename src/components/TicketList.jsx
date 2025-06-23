import React, { useEffect, useState } from "react";
import api from "../utils/api"; // pastikan path ini sesuai dengan struktur proyekmu

const TicketList = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await api.get("/queue/active-cs-customer");
        const data = res.data.filter(Boolean); // Hilangkan nilai null
        setTickets(data);
      } catch (err) {
        console.error("Gagal mengambil data:", err);
        setTickets([]);
      }
    };

    fetchTickets();
  }, []);

  const displayedTickets =
    tickets.length > 0 ? tickets : [{ cs: { name: "-" }, ticketNumber: "-" }];

  return (
    <div className="flex justify-center gap-8 mt-8">
      {displayedTickets.map((item, idx) => (
        <div
          key={idx}
          className="bg-gradient-to-r from-orange-400 to-orange-300 text-white px-10 py-8 rounded-2xl shadow-lg text-center min-w-[240px]"
        >
          <p className="text-lg font-semibold mb-2">
            Customer Service: {item.cs?.name || "-"}
          </p>
          <p className="text-4xl font-bold">{item.ticketNumber || "-"}</p>
        </div>
      ))}
    </div>
  );
};

export default TicketList;
