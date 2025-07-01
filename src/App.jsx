import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NotFoundPage from "./pages/NotFoundPage"; // ⬅️ Tambahkan ini
import ProtectedRoute from "./components/ProtectedRoute"; // Komponen proteksi akses
import NetworkStatusHandler from "./components/NetworkStatusHandler";
import SessionExpired from "./pages/SessionExpired";

function App() {
  return (
    <Router>
      <NetworkStatusHandler />
      <Routes>
        <Route path="/session-expired" element={<SessionExpired />} />
        {/* Halaman login terbuka untuk umum */}
        <Route path="/" element={<Login />} />

        {/* Halaman antrean terlindungi */}
        <Route
          path="/antrean"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Route fallback untuk 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <NetworkStatusHandler />
    </Router>
  );
}

export default App;
