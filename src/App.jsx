import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute"; // Import komponen yang baru kamu buat

function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman login tetap terbuka */}
        <Route path="/" element={<Login />} />

        {/* Dashboard hanya bisa diakses jika sudah login */}
        <Route
          path="/cs-dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
