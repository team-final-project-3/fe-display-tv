import React, { useEffect, useState } from "react";

const sampleData = [
  { nomor: "002", time: "09.02", layanan: "Buku Hilang, Riset Pin" },
  {
    nomor: "003",
    time: "09.05",
    layanan: "Buku Hilang, Riset Pin Kartu, Riset m-banking",
  },
  { nomor: "004", time: "09.12", layanan: "Buku Hilang" },
  { nomor: "005", time: "09.13", layanan: "Buku Rusak" },
  { nomor: "006", time: "09.20", layanan: "Buku Hilang" },
  { nomor: "007", time: "09.32", layanan: "Buku Rusak" },
  { nomor: "008", time: "09.33", layanan: "Buku Hilang, Riset Pin" },
];

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const currentAntrian = "001";

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatDate = (date) =>
    date.toLocaleDateString("id-ID", {
      weekday: "long",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

  const formatTime = (date) =>
    date.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

  return (
    <div className="min-h-screen bg-black text-white p-6 font-sans">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold tracking-wider">
          TEMUCS - INFORMASI ANTRIAN
        </h1>
        <div className="text-right">
          <p className="text-xl">{formatDate(currentTime)}</p>
          <p className="text-3xl font-mono">{formatTime(currentTime)}</p>
        </div>
      </div>

      <div className="bg-white text-black p-8 rounded-lg shadow-lg flex justify-between">
        <div className="w-3/5">
          <h2 className="text-2xl font-bold mb-4">UPCOMING ANTRIAN</h2>
          <table className="w-full text-lg table-auto">
            <thead>
              <tr className="border-b-2">
                <th className="text-left pb-2">No</th>
                <th className="text-left pb-2">Time</th>
                <th className="text-left pb-2">Layanan</th>
              </tr>
            </thead>
            <tbody>
              {sampleData.map((row, i) => (
                <tr key={i} className="border-t border-gray-300">
                  <td className="py-2">{row.nomor}</td>
                  <td className="py-2">{row.time}</td>
                  <td className="py-2">{row.layanan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="w-1/3 flex flex-col justify-center items-center border-l-2 pl-8">
          <p className="text-xl mb-2">ANTRIAN SAAT INI</p>
          <p className="text-orange-600 text-[140px] font-bold leading-none">
            {currentAntrian}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
