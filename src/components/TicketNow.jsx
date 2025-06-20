import React, { useEffect, useState } from "react";
import api from "../utils/api";

const TicketNow = () => {
  const [queues, setQueues] = useState([]);
  const [csIdOrder, setCsIdOrder] = useState([]);

  useEffect(() => {
    const fetchInProgressQueues = async () => {
      try {
        const res = await api.get("/queue/inprogress/cs");
        const data = Array.isArray(res.data) ? res.data : [res.data];

        const uniqueCsIds = [...new Set(data.map((item) => item.csId))];
        setCsIdOrder(uniqueCsIds);
        setQueues(data);
      } catch (error) {
        console.error("Gagal mengambil antrian in-progress:", error);
      }
    };

    fetchInProgressQueues();
  }, []);

  const getCsLabel = (csId) => {
    const index = csIdOrder.indexOf(csId);
    if (index === 0) return "Customer service A";
    if (index === 1) return "Customer service B";
    if (index === 2) return "Customer service C";
    return "Customer service";
  };

  const mainTicket = queues[0];
  const otherTickets = queues.slice(1);

  return (
    <div className="w-full">
      {/* Panel utama: Tiket pertama */}
      {mainTicket && (
        <div className="text-white text-center">
          <p className="text-3xl font-semibold mb-2">
            {getCsLabel(mainTicket.csId)}
          </p>
          <p className="text-[120px] font-bold tracking-widest leading-none">
            {mainTicket.ticketNumber}
          </p>
        </div>
      )}

      {/* Panel bawah: Tiket kedua dan ketiga */}
      <div className="flex justify-center mt-6 gap-6">
        {otherTickets.map((q) => (
          <div
            key={q.id}
            className="bg-gradient-to-r from-orange-400 to-orange-300 text-white px-6 py-4 rounded-lg shadow-md text-center"
          >
            <p className="text-sm mb-1">{getCsLabel(q.csId)}</p>
            <p className="text-2xl font-bold">{q.ticketNumber}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketNow;
