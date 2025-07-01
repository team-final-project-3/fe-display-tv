import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NetworkStatusHandler = ({ children }) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      navigate(0); // refresh halaman saat kembali online
    };

    const handleOffline = () => {
      setIsOnline(false);
      setCountdown(5); // reset countdown
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [navigate]);

  useEffect(() => {
    let timer;
    if (!isOnline) {
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev === 1) {
            clearInterval(timer);
            navigate("/antrean");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isOnline, navigate]);

  const handleRefresh = () => {
    window.location.reload();
  };

  if (!isOnline) {
    return (
      <div className="fixed inset-0 bg-[#FFF5F5] z-50 flex items-center justify-center">
        <div className="text-center px-6 bg-white shadow-lg rounded-lg py-6 border border-red-300 max-w-sm w-full">
          <h1 className="text-red-600 text-2xl font-bold mb-2">
            🔌 Koneksi Terputus
          </h1>
          <p className="text-gray-700 mb-1">Periksa koneksi internet Anda.</p>
          <p className="text-sm text-gray-500 mb-4">
            Anda akan diarahkan ke antrean dalam{" "}
            <span className="font-semibold text-red-500">{countdown}</span>{" "}
            detik...
          </p>
          <button
            onClick={handleRefresh}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded shadow cursor-pointer"
          >
            🔄 Refresh Halaman
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default NetworkStatusHandler;
