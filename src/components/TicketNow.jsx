import React, { useEffect, useState } from "react";
import api from "../utils/api";

const TicketNow = () => {
  const [ticketNumber, setTicketNumber] = useState("-");

  useEffect(() => {
    const fetchTicketNow = async () => {
      try {
        const res = await api.get("/queue/inprogress/cs");
        const data = res.data;
        setTicketNumber(data?.ticketNumber || "-");
      } catch (err) {
        console.error("Gagal mengambil data giliran sekarang:", err);
        setTicketNumber("-");
      }
    };

    fetchTicketNow();
  }, []);

  return (
    <div className="w-full h-full bg-gradient-to-r from-orange-500 to-orange-300 text-white rounded-xl shadow-lg flex flex-col items-center justify-center p-10">
      <p className="text-2xl font-semibold mb-4">Giliran Sekarang:</p>
      <p className="text-7xl font-bold">{ticketNumber}</p>
    </div>
  );
};

export default TicketNow;
