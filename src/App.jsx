import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login"; // tambahkan import login

function App() {
  return (
    <Router>
      <Routes>
        {/* Login sebagai halaman default */}
        <Route path="/" element={<Login />} />

        {/* Dashboard CS setelah login */}
        <Route path="/cs-dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
