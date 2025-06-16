import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import api from "../utils/api";

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [branchName, setBranchName] = useState("");
  const [branchAddress, setBranchAddress] = useState("");
  const [branchId, setBranchId] = useState(null);
  const [queues, setQueues] = useState([]);
  const navigate = useNavigate();
  const currentAntrian = "001"; // bisa nanti ambil dari queue terdepan

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchProfileAndQueues = async () => {
      try {
        const res = await api.get("cs/profile");
        const branch = res.data.cs.branch;
        setBranchName(branch.name);
        setBranchAddress(branch.address);
        setBranchId(branch.id);

        // Fetch queue berdasarkan branchId
        const queueRes = await api.get(`queue/waiting/${branch.id}`);
        setQueues(queueRes.data);
      } catch (err) {
        console.error("Gagal mengambil data cabang / antrian", err);
      }
    };

    fetchProfileAndQueues();
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

  const formatHourMinute = (isoDateString) => {
    const date = new Date(isoDateString);
    return date.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 font-sans">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-4xl font-bold tracking-wider mb-1">
            Informasi Antrian - BNI Branch {branchName}
          </h1>
          <p className="text-sm text-gray-300 max-w-[600px]">{branchAddress}</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-xl">{formatDate(currentTime)}</p>
            <p className="text-3xl font-mono">{formatTime(currentTime)}</p>
          </div>
          <button
            onClick={handleLogout}
            title="Logout"
            className="text-white hover:text-red-500 text-xl"
          >
            <FiLogOut />
          </button>
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
              {queues.map((q) => (
                <tr key={q.id} className="border-t border-gray-300">
                  <td className="py-2">{q.ticketNumber}</td>
                  <td className="py-2">{formatHourMinute(q.bookingDate)}</td>
                  <td className="py-2">
                    {q.services.map((s) => s.serviceName).join(", ")}
                  </td>
                </tr>
              ))}
              {queues.length === 0 && (
                <tr>
                  <td colSpan="3" className="text-center text-gray-400 py-4">
                    Tidak ada antrian menunggu
                  </td>
                </tr>
              )}
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
